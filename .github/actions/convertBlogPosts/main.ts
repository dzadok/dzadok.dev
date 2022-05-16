import * as core from "@actions/core";
import convertBlogPost from "./convertBlogPost";
import { Firestore } from "@google-cloud/firestore";

interface BlogPost {
  title: string;
  date: string;
  content: string;
}

export default async function run() {
  const firestore = new Firestore({
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

  const ids = (await idRef.get()).data()?.["ids"];
  const blogIds: string[] = ids !== undefined ? ids : [];

  const batch = firestore.batch();

  try {
    for (const file of changedFiles) {
      const post: BlogPost = (await convertBlogPost(file)) as BlogPost;
      blogIds.push(post.date);
      const docRef = firestore.collection("blogPosts").doc(post.date);
      batch.set(docRef, post);
    }
    batch.set(idRef, { ids: blogIds });
  } catch (err: any) {
    core.setFailed(err);
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
