import * as core from "@actions/core";
import convertBlogPost from "./convertBlogPost";
import { Firestore } from "@google-cloud/firestore";

export default async function run() {
  const firestore = new Firestore({
    keyFilename: core.getInput("firebaseServiceAccount"),
    projectId: "dzadok-dev",
  });
  const batch = firestore.batch();

  for (const file in core.getInput("files").split(",")) {
    const post = await convertBlogPost(file);
    batch.set(firestore.doc(`blog/${post.date}`), post);
  }

  await batch.commit();
}
