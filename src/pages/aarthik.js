import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import ANSU from "../../public/ANSU.jpg";
import Head from "next/head";
// import prachar from "@/public/prachar.gif";
// import rightbanner1 from "@/public/rightbanner1.gif";
// import { MdArrowForwardIos } from "react-icons/md";

function truncateContent(content, maxWords) {
  if (typeof content !== "string") {
    return "";
  }

  const words = content.trim().split(" ");
  const truncated = words.slice(0, maxWords).join(" ");
  return truncated + (words.length > maxWords ? "..." : "");
}

const aarthik = ({ aarthikNews }) => {
  const aarthikNewsfirst = aarthikNews[0];
  const aarthikNewsremaining = aarthikNews.slice(1);

  return (
    <section className={styles.bijnesh_samachar}>
      <Head>
        <title>आर्थिक</title>
      </Head>
      <div className={styles.news_container}>
        <div className={styles.col_left_bijnesh}>
          <div className={styles.section_title}>
            <h2 className={styles.title_part}>आर्थिक</h2>
          </div>
          <div className={styles.span_12_bijnesh}>
            <div className={styles.samachar_spot_news_bijnesh}>
              <div className={styles.post_img_2_bijnesh}>
                <Link href={`/news/${aarthikNewsfirst.id}`}>
                  <Image
                    src={`https://www.bimaabazar.com/${aarthikNewsfirst.image1}`}
                    alt="aarthik"
                    width={580}
                    height={508}
                  />
                </Link>
              </div>
              <div className={styles.post_title_2}>
                <Link href={`/news/${aarthikNewsfirst.id}`}>
                  <h4>{aarthikNewsfirst.title}</h4>
                </Link>
                <p>{truncateContent(aarthikNewsfirst.content, 40)}</p>
              </div>
            </div>
          </div>
          <div
            className={styles.home_samachar}
            data-device-type="desktop"
          ></div>
          <div className={styles.grid_12}>
            {aarthikNewsremaining.map((aarthikItem) => (
              <div className={styles.span_4_bijnesh} key={aarthikItem.id}>
                <div className={styles.post_1tr_binesh}>
                  <Link
                    className={styles.post_con_bijnesh}
                    href={`/news/${aarthikItem.id}`}
                  >
                    <Image
                      src={`https://www.bimaabazar.com/${aarthikItem.image1}`}
                      alt="aarthik"
                      width={386}
                      height={254}
                    />
                    <div className={styles.content_wrap_bijnesh}>
                      <h2 className={styles.title_text_bijnesh}>
                        {aarthikItem.title}
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

export default aarthik;

export async function getServerSideProps() {
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;

  const res = await fetch("https://www.bimaabazar.com/newsportal/news/", {
    headers: {
      "X-API-Key": apiKey,
    },
  });
  let newsData = await res.json();
  let aarthikNews = newsData.filter((news) => news.category === 10);
  aarthikNews = aarthikNews.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  return {
    props: {
      aarthikNews,
    },
  };
}
