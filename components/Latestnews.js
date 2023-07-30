
import styles from "@/styles/Home.module.css"
import Link from "next/link";
import Image from "next/image";
import { FaRegClock, FaRegCommentAlt } from "react-icons/fa";


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

function truncateContent(content, maxWords) {
  if (typeof content !== "string") {
    return "";
  }

  const words = content.trim().split(" ");
  const truncated = words.slice(0, maxWords).join(" ");
  return truncated + (words.length > maxWords ? "..." : "");
}

export default function Latestnews({news}) {
  return (
    <section className={styles.latest}>
        <div className={styles.latest_container}>
          <Link href={`/news/${news.id}`}>
            <h2>{news.title}</h2>
          </Link>
          <div className={styles.title_info}>
            <div className={styles.news_author}>
              <span className={styles.author_icon}>
                <Image
                  src={`https://www.bimaabazar.com/${news.image1}`}
                  alt=""
                  width={100}
                  height={100}
                />
              </span>
              <span>{news.author}</span>
            </div>
            <div className={styles.post_hour}>
              <i>
                <FaRegClock />
              </i>
              <span>{formatTime(getMinutesAgo(news.created_at))}</span>
            </div>
            <div className={styles.news_comment}>
              <i>
                <FaRegCommentAlt />
              </i>
              <span>0</span>
            </div>
          </div>
          {news.image1 && (
            <div className={styles.latest_news_image}>
              <Link href={`/news/${news.id}`}>
                <Image
                  src={`https://www.bimaabazar.com/${news.image1}`}
                  alt=""
                  width={1248}
                  height={800}
                />
              </Link>
            </div>
          )}
          {!news.image1 && (
            <div
              className={styles.latest_news_image}
              style={{ display: "none" }}
            ></div>
          )}
          {/* Display truncated content */}
          <p className={styles.latest_news_image_description}>
            {truncateContent(news.content, 100)}
            content
          </p>
        </div>
    </section>
  );
}
