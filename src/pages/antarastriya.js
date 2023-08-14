import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import ANSU from "../../public/ANSU.jpg";
import digital from "../../public/digital.jpg";
import prachar from "../../public/prachar.gif";
import { MdArrowForwardIos } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";

function getMinutesAgo(created_at) {
  const createdDate = new Date(created_at);
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - createdDate.getTime();
  const minutesAgo = Math.floor(timeDifference / (1000 * 60));
  return minutesAgo;
}

function formatTime(minutes) {
  if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else {
    const hours = Math.floor(minutes / 60);
    return `${hours} hours ago`;
  }
}

const antarastriya = ({ antarastriyasamachar }) => {
  return (
    <section className={styles.manoranjan_section}>
      <div className={styles.E_container}>
        <div className={styles.E_section_title}>
          <h2 className={styles.E_title_part_total}>अन्तराष्ट्रिय</h2>
        </div>
        <div className={styles.Enter_grid_12}>
          {antarastriyasamachar.map((antarastriyaItem) => (
            <div className={styles.span_4} key={antarastriyaItem.id}>
              <div className={styles.Enter_spot_news}>
                <Link href={`/news/${antarastriyaItem.id}`}>
                  <Image
                    className={styles.M_image}
                    src={`https://www.bimaabazar.com/${antarastriyaItem.image1}`}
                    alt="antarastriya"
                    width={500}
                    height={400}
                  />
                  <div className={styles.post_content1}>
                    <h2 className={styles.E_title_text1}>
                      {antarastriyaItem.title}
                    </h2>
                    <div className={styles.title_in}>
                      <div className={styles.M_post_hour}>
                        <i>
                          <FaRegClock />
                        </i>
                        <span>
                          {formatTime(
                            getMinutesAgo(antarastriyaItem.created_at)
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default antarastriya;

export async function getServerSideProps() {
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;

  const res = await fetch("https://www.bimaabazar.com/newsportal/news/", {
    headers: {
      "X-API-Key": apiKey,
    },
  });
  let newsData = await res.json();
  let antarastriyasamachar = newsData.filter((news) => news.category === 15);
  antarastriyasamachar = antarastriyasamachar.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  return {
    props: {
      antarastriyasamachar,
    },
  };
}
