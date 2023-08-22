import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import ANSU from "../../public/ANSU.jpg";
import Head from "next/head";

function truncateContent(content, maxWords) {
  if (typeof content !== "string") {
    return "";
  }

  const words = content.trim().split(" ");
  const truncated = words.slice(0, maxWords).join(" ");
  return truncated + (words.length > maxWords ? "..." : "");
}
const samachar = ({ samacharNews }) => {
  const samacharNewsfirst = samacharNews[0];
  const samacharNewsremaining = samacharNews.slice(1);
  return (
    <section className={styles.bijnesh_samachar}>
      <Head><title>समाचार</title></Head>
      <div className={styles.news_container}>
        <div className={styles.col_left_bijnesh}>
          <div className={styles.section_title}>
            <h2 className={styles.title_part}>समाचार</h2>
          </div>
          <div className={styles.span_12_bijnesh} key={samacharNewsfirst.id}>
            <div className={styles.samachar_spot_news_bijnesh}>
              <div className={styles.post_img_2_bijnesh}>
                <Link href={`/news/${samacharNewsfirst.id}`}>
                  <Image
                    src={`https://www.bimaabazar.com/${samacharNewsfirst.image1}`}
                    alt="samachar"
                    width={580}
                    height={508}
                  />
                </Link>
              </div>
              <div className={styles.post_title_samachar}>
                <Link href={`/news/${samacharNewsfirst.id}`}>
                  <h4>{samacharNewsfirst.title}</h4>
                </Link>
                <p>{truncateContent(samacharNewsfirst.content, 40)}</p>
              </div>
            </div>
          </div>
          <div
            className={styles.home_samachar}
            data-device-type="desktop"
          ></div>
          <div className={styles.grid_12}>
            {samacharNewsremaining.map((samaremain) => (
              <div className={styles.span_4_bijnesh} key={samaremain.id}>
                <div className={styles.post_1tr_binesh}>
                  <Link
                    className={styles.post_con_bijnesh}
                    href={`/news/${samaremain.id}`}
                  >
                    <Image
                      src={`https://www.bimaabazar.com/${samaremain.image1}`}
                      alt=""
                      width={386}
                      height={254}
                    />
                    <div className={styles.content_wrap_bijnesh}>
                      <h2 className={styles.title_text_bijnesh}>
                        {samaremain.title}
                      </h2>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {/* <div className={styles.pagination_content}>
            <div className={styles.page_navigation}>
              <div className={styles.navigation_links}>
                <Link href="/">1</Link>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default samachar;

export async function getServerSideProps() {
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;

  const res = await fetch("https://www.bimaabazar.com/newsportal/news/", {
    headers: {
      "X-API-Key": apiKey,
    },
  });
  let newsData = await res.json();
  let samacharNews = newsData.filter((news) => news.category === 8);
  samacharNews = samacharNews.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  return {
    props: {
      samacharNews,
    },
  };
}
