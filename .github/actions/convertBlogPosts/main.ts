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

  console.log("Found ", ...changedFiles);
  const batch = firestore.batch();

  for (const file in changedFiles) {
    const post: BlogPost = (await convertBlogPost(file)) as BlogPost;
    try {
      batch.set(firestore.doc(`blog/${post.date.format("YYYY-DD-MM")}`), post);
    } catch (err) {
      console.error(err);
    }
  }

  batch.commit().then(
    () => {
      console.log("Successfully updated Firestore.");
    },
    (reason) => {
      console.error(reason);
    }
  );
}
