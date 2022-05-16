"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const convertBlogPost_1 = __importDefault(require("./convertBlogPost"));
const firestore_1 = require("@google-cloud/firestore");
function run() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const firestore = new firestore_1.Firestore({
            credentials: JSON.parse(core.getInput("firebaseServiceAccount")),
            projectId: "dzadok-dev",
        });
        const changedFiles = core.getInput("files").split(",");
        if (changedFiles.length === 0) {
            core.setFailed("No files found.");
            throw new Error("No files found.");
        }
        const idRef = firestore.collection("BlogPostX").doc("byDate");
        core.info(`Found  ${changedFiles.join(", ")}`);
        const ids = (_a = (yield idRef.get()).data()) === null || _a === void 0 ? void 0 : _a["ids"];
        const blogIds = ids !== undefined ? ids : [];
        const batch = firestore.batch();
        try {
            for (const file of changedFiles) {
                const post = (yield (0, convertBlogPost_1.default)(file));
                blogIds.push(post.date);
                const docRef = firestore.collection("blogPosts").doc(post.date);
                batch.set(docRef, post);
            }
            batch.set(idRef, { ids: blogIds });
        }
        catch (err) {
            core.setFailed(err);
        }
        batch.commit().then(() => {
            core.notice("Successfully updated Firestore.");
        }, (reason) => {
            core.setFailed(reason);
        });
    });
}
exports.default = run;
run();
