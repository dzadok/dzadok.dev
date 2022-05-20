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

async function GetBlogPosts() {
  const content = [];
  for (const id of posts) {
    content.push(await getDoc(doc(collRef, id)));
  }
  return content;
}

function getLastPostFromLocalStorage(dft = 0) {
  const id = localStorage.getItem("blogPostId");
  return id ? parseInt(id) : dft;
}

export default function Blog() {
  const { theme } = useContext(ThemeContext);
  const [blogPost, updateBlogPost] = useState(
    new Array<DocumentSnapshot<DocumentData>>()
  );
  const [postId, updatePostId] = useState(getLastPostFromLocalStorage(0));

  function firstPost() {
    localStorage.setItem("blogPostId", "0");
    updatePostId(0);
  }

  function prevPost() {
    const newId = postId - 1;
    localStorage.setItem("blogPostId", newId.toString());
    updatePostId(newId);
  }

  function nextPost() {
    const newId = postId + 1;
    localStorage.setItem("blogPostId", newId.toString());
    updatePostId(newId);
  }

  function lastPost() {
    const newId = blogPost.length - 1;
    localStorage.setItem("blogPostId", newId.toString());
    updatePostId(newId);
  }

  useEffect(() => {
    GetBlogPosts().then((posts) => {
      updateBlogPost(posts);
    });
  }, []);
  return (
    <section id="blog">
      <BlogPost lightOrDarkTheme={theme} blogPost={blogPost[postId]}></BlogPost>
      <nav id="blogNav">
        <button onClick={firstPost} disabled={postId === 0}>
          First
        </button>
        <button onClick={prevPost} disabled={postId === 0}>
          Previous
        </button>
        <button onClick={nextPost} disabled={postId + 1 >= blogPost.length}>
          Next
        </button>
        <button onClick={lastPost} disabled={postId + 1 >= blogPost.length}>
          Last
        </button>
      </nav>
    </section>
  );
}
