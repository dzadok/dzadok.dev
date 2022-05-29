import "./Blog.css";
import React, { useContext, useEffect, useState } from "react";
import {
  collection,
  doc,
  DocumentData,
  DocumentSnapshot,
  getDoc,
  getFirestore,
} from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";
import { ThemeContext } from "../lightOrDark";
import BlogPost from "./BlogPost";

const firebaseConfig = {
  apiKey: "AIzaSyBt93YZMu-obz_vgwlSPqzlOlCV8F0BCno",
  authDomain: "dzadok.dev",
  projectId: "dzadok-dev",
  storageBucket: "dzadok-dev.appspot.com",
  messagingSenderId: "161116533438",
  appId: "1:161116533438:web:e080636504cd8b2cf3a4ef",
  measurementId: "G-PDK1GZ5R4C",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const collRef = collection(db, "blogPosts");
const posts = (await getDoc(doc(db, "BlogPostX/byDate"))).get("ids");

export default function Blog() {
  const { theme } = useContext(ThemeContext);
  const [blogPosts, updateBlogPosts] = useState(
    new Map<number, DocumentSnapshot<DocumentData>>()
  );
  const [postId, updatePostId] = useState(-1);

  function getLastPostFromLocalStorage(dft = 0) {
    const storage = localStorage.getItem("blogPostId");
    return storage ? parseInt(storage) : dft;
  }

  async function getPost(postId: number) {
    if (postId === -1) {
      return false;
    }
    if (!blogPosts.has(postId)) {
      await getDoc(doc(collRef, posts[postId])).then((post) => {
        updateBlogPosts(blogPosts.set(postId, post));
      });
    }
    localStorage.setItem("blogPostId", postId.toString());
    return true;
  }

  async function firstPost() {
    await getPost(0);
    updatePostId(0);
  }

  async function prevPost() {
    const newId = postId - 1;
    await getPost(newId);
    updatePostId(newId);
  }

  async function nextPost() {
    const newId = postId + 1;
    await getPost(newId);
    updatePostId(newId);
  }

  async function lastPost() {
    const newId = posts.length - 1;
    await getPost(newId);
    updatePostId(newId);
  }

  useEffect(() => {
    const postNumber = getLastPostFromLocalStorage(0);
    getPost(postNumber).then((updated) => {
      if (updated) {
        updatePostId(postNumber);
      }
    });
  }, []);

  const currentPost = blogPosts.get(postId);
  const blogPost = currentPost ? (
    <BlogPost lightOrDarkTheme={theme} blogPost={currentPost}></BlogPost>
  ) : (
    "Loading"
  );

  return (
    <section id="blog">
      {blogPost}
      <nav id="blogNav" className={theme}>
        <button onClick={firstPost} disabled={postId === 0}>
          First
        </button>
        <button onClick={prevPost} disabled={postId === 0}>
          Previous
        </button>
        <button onClick={nextPost} disabled={postId + 1 >= posts.length}>
          Next
        </button>
        <button onClick={lastPost} disabled={postId + 1 >= posts.length}>
          Last
        </button>
      </nav>
    </section>
  );
}
