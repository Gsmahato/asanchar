import React from "react";
import NewsDetail from "../../../components/NewsDetail";

export default function Newspage({ news }) {
  return (
    <div>
        <NewsDetail news={news}/>
    </div>
  );
}

export async function getServerSideProps(context) {
    const { params } = context;
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
