import Head from "next/head";
import ArticleList from "../components/ArticleList";

import Image from "next/image";
import styles from "../styles/Layout.module.css";

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>WebDev Newz</title>
        <meta name="keywords" content="web development, programming"></meta>
      </Head>

      <ArticleList articles={articles}></ArticleList>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
  const articles = await res.json();
  // articles = articles.map((a) => {
  //   (key = a.id), { ...a };
  // });

  return {
    props: {
      articles,
    },
  };
};
