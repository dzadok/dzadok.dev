"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core = require("@actions/core");
const convertBlogPost_1 = require("./convertBlogPost");
const firestore_1 = require("@google-cloud/firestore");
async function run() {
    const firestore = new firestore_1.Firestore({
        keyFilename: core.getInput("firebaseServiceAccount"),
        projectId: "dzadok-dev",
    });
    const batch = firestore.batch();
    for (const file in core.getInput("files").split("\n")) {
        const post = await (0, convertBlogPost_1.default)(file);
        batch.set(firestore.doc(`blog/${post.date}`), post);
    }
    batch.commit();
}
exports.default = run;
