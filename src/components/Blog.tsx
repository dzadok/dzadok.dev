import { convertMarkdown } from "./Markdown";
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
import Dayjs from "dayjs";

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

export default function Blog() {
  const { theme } = useContext(ThemeContext);
  const [blogPost, updateBlogPost] = useState(
    new Array<DocumentSnapshot<DocumentData>>()
  );

  useEffect(() => {
    GetBlogPosts().then((posts) => {
      updateBlogPost(posts);
    });
  }, []);

  return (
    <section id="blog">
      {blogPost.map((post) => {
        const date = post.get("date").substring(0, 10);
        return (
          <article className={`blogPost ${theme}`} key={date}>
            <h2>{post.get("title")}</h2>
            <p>{Dayjs(date).format("MMM D, YYYY")}</p>
            {convertMarkdown(post.get("content"))}
          </article>
        );
      })}
    </section>
  );
}
