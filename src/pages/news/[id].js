import React from "react";

function Newspage({ news }) {
  return (
    <div>{news.title}</div>
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
