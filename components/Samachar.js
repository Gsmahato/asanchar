import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import ANSU from "../public/ANSU.jpg";
import prachar from "../public/prachar.gif";
import rightbanner1 from "../public/rightbanner1.gif";
import { MdArrowForwardIos } from "react-icons/md";

function truncateContent(content, maxWords) {
  if (typeof content !== "string") {
    return "";
  }

  const words = content.trim().split(" ");
  const truncated = words.slice(0, maxWords).join(" ");
  return truncated + (words.length > maxWords ? "..." : "");
}

const Samachar = ({ samacharNews }) => {
  const samafirst = samacharNews[0];
  const samaremaining = samacharNews.slice(1, 15);

  return (
    <section className={styles.samachar_section}>
      <div className={styles.news_container}>
        <div className={styles.col_left}>
          <div className={styles.section_title}>
            <h2 className={styles.title_part}>
              समाचार
              <Link href="/samachar">
                <i className={styles.F_arrow}>
                  <MdArrowForwardIos />
                </i>
              </Link>
            </h2>
          </div>

          <div className={styles.grid_12}>
            <div className={styles.span_12}>
              <div className={styles.samachar_spot_news} key={samafirst.id}>
                <div className={styles.post_img}>
                  <Link href={`/news/${samafirst.id}`}>
                    <Image
                      src={`https://prajjwalacharya.pythonanywhere.com/${samafirst.image1}`}
                      alt="samachar"
                      width={580}
                      height={508}
                    />
                  </Link>
                </div>
                <div className={styles.post_title}>
                  <Link href={`/news/${samafirst.id}`}>
                    <h4>{samafirst.title}</h4>
                  </Link>
                  <p>{truncateContent(samafirst.content, 40)}</p>
                </div>
              </div>
            </div>
            <div
              className={styles.home_samachar}
              data-device-type="desktop"
            ></div>
            {samaremaining.map((remainingNews) => (
              <div className={styles.span_6} key={remainingNews.id}>
                <div className={styles.post_1tr}>
                  <Link
                    className={styles.post_con}
                    href={`/news/${remainingNews.id}`}
                  >
                    <Image
                      src={`https://prajjwalacharya.pythonanywhere.com/${remainingNews.image1}`}
                      alt="samachar"
                      width={134}
                      height={82}
                    />
                    <div className={styles.content_wrap}>
                      <h2 className={styles.title_text}>
                        {remainingNews.title}
                      </h2>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <div className={styles.col_right}>
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
              <div className={styles.each_ad}>
                <Link href="/">
                  <Image src={rightbanner1} width={300} height={150} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Samachar;
