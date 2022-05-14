import * as core from "@actions/core";
import convertBlogPost from "./convertBlogPost";
import { Firestore } from "@google-cloud/firestore";
import { Dayjs } from "dayjs";

interface BlogPost {
  title: string;
  date: Dayjs;
  content: string;
}

export default async function run() {
  const firestore = new Firestore({
    keyFilename: core.getInput("firebaseServiceAccount"),
    projectId: "dzadok-dev",
  });

  const changedFiles = core.getInput("files").split(",");
  if (changedFiles.length === 0) {
    core.setFailed("No files found.");
    throw new Error("No files found.");
  }

  core.info(`Found  ${changedFiles.join(", ")}`);
  const batch = firestore.batch();

  for (const file in changedFiles) {
    const post: BlogPost = (await convertBlogPost(file)) as BlogPost;
    try {
      const docRef = firestore
        .collection("blogPosts")
        .doc(post.date.format("YYYY-DD-MM"));
      batch.set(docRef, post);
    } catch (err: any) {
      core.setFailed(err);
    }
  }

  batch.commit().then(
    () => {
      core.notice("Successfully updated Firestore.");
    },
    (reason) => {
      core.setFailed(reason);
    }
  );
}

run();
