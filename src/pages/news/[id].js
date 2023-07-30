import React from "react";
import styles from "@/styles/Home.module.css"
import Image from "next/image";

function Newspage({ news }) {
  return (
    <div className={styles.latest}>
      <h4>{news.title}</h4>
      <div>
        <Image src={`https://www.bimaabazar.com/${news.image1}`} alt="" width={1000} height={600} />
      </div>
      <div>{news.content}</div>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://www.bimaabazar.com/newsportal/news/");
  const newsList = await res.json();

  const paths = newsList.map((news) => ({
    params: { id: news.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://www.bimaabazar.com/newsportal/news/${params.id}`
  );
  const news = await res.json();

  return { props: { news } };
}

export default Newspage;
