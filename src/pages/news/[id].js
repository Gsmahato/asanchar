import React from "react";

export default function Newspage({ news }) {
    return (
        <div>{news.title}</div>
    );
  }
  
  export async function getStaticPaths() {
    const apiUrl = "https://www.bimaabazar.com/newsportal/news/";
    const res = await fetch(apiUrl);
    const newsList = await res.json();
  
    const paths = newsList.map((news) => ({
      params: { id: news.id.toString() },
    }));
  
    return {
      paths,
      fallback: true, 
    };
  }
  
  export async function getStaticProps({ params }) {
    const id = params.id;
  
    const apiUrl = `https://www.bimaabazar.com/newsportal/news/${id}`;
    const res = await fetch(apiUrl);
    const news = await res.json();
  
    return {
      props: {
        news,
      },
    };
  }