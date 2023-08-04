
import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import ANSU from "../../public/ANSU.jpg";
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

const swastha = ({swasthaNews}) => {
  const swasthaNewsfirst=swasthaNews[0];
  const swasthaNewsremaining = swasthaNews.slice(1);

  return (
    <section className={styles.bijnesh_samachar}>
      <div className={styles.news_container}>
        <div className={styles.col_left_bijnesh}>
          <div className={styles.section_title}>
            <h2 className={styles.title_part}>स्वास्थ्य</h2>
          </div>
          <div className={styles.span_12_bijnesh}>
            <div className={styles.samachar_spot_news_bijnesh}>
              <div className={styles.post_img_2_bijnesh}>
                <Link href={`/news/${swasthaNewsfirst.id}`}>
                  <Image src={`https://www.bimaabazar.com/${swasthaNewsfirst.image1}`} alt="swastha" width={580} height={508} />
                </Link>
              </div>
              <div className={styles.post_title_2}>
                <Link href={`/news/${swasthaNewsfirst.id}`}>
                  <h4>
                    {swasthaNewsfirst.title}
                  </h4>
                </Link>
                <p>
                {truncateContent(swasthaNewsfirst.content, 40)}
                </p>
              </div>
            </div>
          </div>
          <div
            className={styles.home_samachar}
            data-device-type="desktop"
          ></div>
          <div className={styles.grid_12}>
            {swasthaNewsremaining.map((swasthaItem)=>(
            <div className={styles.span_4_bijnesh} key={swasthaItem.id}>
              <div className={styles.post_1tr_binesh}>
                <Link className={styles.post_con_bijnesh} href={`/news/${swasthaItem.id}`}>
                  <Image src={`https://www.bimaabazar.com/${swasthaItem.image1}`} alt="swastha" width={386} height={254} />
                  <div className={styles.content_wrap_bijnesh}>
                    <h2 className={styles.title_text_bijnesh}>
                     {swasthaItem.title}
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

export default swastha

export async function getStaticProps() {
  const res = await fetch("https://www.bimaabazar.com/newsportal/news/");
  let newsData = await res.json();
  let swasthaNews = newsData.filter((news) => news.category === 12);
  swasthaNews = swasthaNews.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  return {
    props: {
      swasthaNews,
    },
  };
}