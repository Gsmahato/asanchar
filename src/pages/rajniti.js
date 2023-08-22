import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import ANSU from "../../public/ANSU.jpg";
import digital from "../../public/digital.jpg";
import prachar from "../../public/prachar.gif";
import rightbanner1 from "../../public/rightbanner1.gif";
import { MdArrowForwardIos } from "react-icons/md";
import Head from "next/head";
const rajniti = ({ rajnitiNews, newsData }) => {
  const rajnitiNewsfirst = rajnitiNews[0];
  const rajnitiNewsremaining = rajnitiNews.slice(1);
  const trendingNews = newsData.filter((news) => news.trending);
  const trendtopnews = trendingNews.slice(0, 9);
  return (
    <section className={styles.bijnesh_samachar}>
      <Head>
        <title>राजनीति</title>
      </Head>
      <div className={styles.news_container}>
        <div className={styles.col_left}>
          <div className={styles.section_title}>
            <h2 className={styles.title_part}>राजनीति</h2>
          </div>
          <div className={styles.grid_12}>
            <div className={styles.span_12} key={rajnitiNewsfirst.id}>
              <div className={styles.samachar_spot_news}>
                <div className={styles.post_img}>
                  <Link href={`/news/${rajnitiNewsfirst.id}`}>
                    <Image
                      src={`https://www.bimaabazar.com/${rajnitiNewsfirst.image1}`}
                      alt="rajniti"
                      width={580}
                      height={508}
                    />
                  </Link>
                </div>
                <div className={styles.post_title_3}>
                  <Link href={`/news/${rajnitiNewsfirst.id}`}>
                    <h4>{rajnitiNewsfirst.title}</h4>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className={styles.home_samachar}
              data-device-type="desktop"
            ></div>
            {rajnitiNewsremaining.map((ranews) => (
              <div className={styles.span_4} key={ranews.id}>
                <div className={styles.pradesh_post_news}>
                  <Link
                    className={styles.pradesh_post_news}
                    href={`/news/${ranews.id}`}
                  >
                    <Image
                      src={`https://www.bimaabazar.com/${ranews.image1}`}
                      alt="rajniti"
                      width={276}
                      height={165}
                    />
                    <div className={styles.post_content_wrap}>
                      <h2>{ranews.title}</h2>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.col_right}>
          <div className={styles.trending_vertical}>
            <h2>ट्रेन्डिङ</h2>
            <ul className={styles.t_news}>
              {trendtopnews.map((trendNews) => (
                <li key={trendNews.id}>
                  <div className={styles.p_news}>
                    <Link href={`/news/${trendNews.id}`}>
                      <span className={styles.trending_counter}></span>
                      <div className={styles.pradesh_content_wrap}>
                        <h2 className={styles.pradesh_title_text}>
                          {trendNews.title}
                        </h2>
                      </div>
                      <Image
                        src={`https://www.bimaabazar.com/${trendNews.image1}`}
                        width={90}
                        height={68}
                        alt="trending"
                      />
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className={styles.bijnesh_right_2}>
            <div className={styles.side_ad}>
              <div
                className={styles.desktop_mukhya_ad}
                data-alias="home-mukhya-right"
                data-device-type="desktop"
              >
                <div className={styles.each_ad}>
                  <Link href="/">
                    <Image src={rightbanner1} width={300} height={150} alt="" />
                  </Link>
                </div>
                <div className={styles.each_ad}>
                  <Link href="/">
                    <Image src={rightbanner1} width={300} height={150} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default rajniti;
export async function getServerSideProps() {
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;

  const res = await fetch("https://www.bimaabazar.com/newsportal/news/", {
    headers: {
      "X-API-Key": apiKey,
    },
  });
  let newsData = await res.json();
  let rajnitiNews = newsData.filter((news) => news.category === 9);
  rajnitiNews = rajnitiNews.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  return {
    props: {
      newsData,
      rajnitiNews,
    },
  };
}
