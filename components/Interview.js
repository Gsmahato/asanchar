import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import ANSU from "../public/ANSU.jpg";
import digital from "../public/digital.jpg";
import prachar from "../public/prachar.gif";
import rightbanner1 from "../public/rightbanner1.gif";
import { MdArrowForwardIos, MdArrowForward } from "react-icons/md";

const Interview = ({ interviewNews,thoughtNews }) => {
  const interviewall = interviewNews.slice(0, 9);
  const bicharNews = thoughtNews.slice(0,6);
  return (
    <section className={styles.bijnesh_samachar}>
      <div className={styles.news_container}>
        <div className={styles.col_left}>
          <div className={styles.section_title}>
            <h2 className={styles.title_part}>
            अन्तर्वार्ता
              <Link href="/antarbarta">
                <i className={styles.F_arrow}>
                  <MdArrowForwardIos />
                </i>
              </Link>
            </h2>
          </div>
          <div className={styles.grid_12}>
            <div
              className={styles.home_samachar}
              data-device-type="desktop"
            ></div>
            {interviewall.map((bigyansecond) => (
              <div className={styles.span_4} key={bigyansecond}>
                <div className={styles.pradesh_post_news} >
                  <Link
                    className={styles.pradesh_post_news}
                    href={`/news/${bigyansecond.id}`}
                  >
                    <Image
                      src={`https://www.bimaabazar.com/${bigyansecond.image1}`}
                      alt="antarbarta"
                      width={276}
                      height={165}
                    />
                    <div className={styles.post_content_wrap}>
                      <h2>{bigyansecond.title}</h2>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.col_right}>
          <div className={styles.trending_vertical}>
          <div className={styles.section_title}>
            <h2 className={styles.title_part}>विचार
            <Link href="/bichar">
                <i className={styles.F_arrow}>
                  <MdArrowForwardIos />
                </i>
              </Link>
            </h2>
            </div>
            <ul className={styles.t_news}>
                {bicharNews.map((bichar)=>(
              <li key={bichar.id}>
                <div className={styles.p_news}>
                  <Link href="/">
                    <div className={styles.pradesh_content_wrap}>
                      <h2 className={styles.pradesh_title_text}>
                        {bichar.title}
                      </h2>
                    </div>
                    <Image src={`https://www.bimaabazar.com/${bichar.image1}`} width={90} height={68} alt="bichar" />
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

export default Interview;
