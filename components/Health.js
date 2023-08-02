import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa";
import { PiClockClockwiseFill } from "react-icons/pi";
import ANSU from "../public/ANSU.jpg";
import RightBanner from "../public/rightbanner.gif";
import { MdArrowForwardIos ,MdArrowForward} from "react-icons/md";


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

const Health = ({healthNews}) => {
    const healthfirst = healthNews[0];
    const healthremaining = healthNews.slice(1, 5);
  return (
    <>
    <section className={styles.mukhya_section}>
      <div className={styles.mukhya_container}>
        <div className={styles.col_left}>
        <div className={styles.section_title}>
            <h2 className={styles.title_part}>
            स्वास्थ्य
              <Link href="/swastha">
                <i className={styles.F_arrow}>
                  <MdArrowForwardIos />
                </i>
              </Link>
            </h2>
          </div>
          <div className={styles.mukhya_news_grid}>
            <div className={styles.span_7}>
              <div className={styles.spot_news}>
                <Link href={`/news/${healthfirst.id}`}>
                  <Image
                    className={styles.M_image}
                    src={`https://www.bimaabazar.com/${healthfirst.image1}`}
                    alt="mukhya"
                    width={700}
                    height={580}
                  />
                  <div className={styles.post_content}>
                    <h2 className={styles.M_title_text}>{healthfirst.title}</h2>
                    <div className={styles.title_in}>
                      <div className={styles.M_post_hour}>
                        <i>
                          <FaRegClock />
                        </i>
                        <span>{formatTime(getMinutesAgo(healthfirst.created_at))}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            {healthremaining.map((fourNews,index)=>(
            <div className={styles.span_5} key={index}>
              <div className={styles.post_2tr}>
                <Link className={styles.post_con} href={`/news/${fourNews.id}`}>
                  <Image src={`https://www.bimaabazar.com/${fourNews.image1}`} alt="mukhya" width={134} height={82} />
                  <div className={styles.M_content_wrap}>
                    <h2 className={styles.title_text_M}>
                      {fourNews.title}
                    </h2>
                    <div className={styles.title_info_m}>
                      <div className={styles.post_hour_m}>
                        <i>
                          <FaRegClock />
                        </i>
                        <span>{formatTime(getMinutesAgo(fourNews.created_at))}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            ))}
            {/* <div className={styles.span_5}>
              <Link href="/" className={styles.quick_update_24}>
                <i className={styles.post_hour_icon_m}>
                  <PiClockClockwiseFill />
                </i>
                २४ घन्टाका ताजा अपडेट
              </Link>
            </div> */}
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
                  <Image src={RightBanner} width={300} height={200} alt="" />
                </Link>
              </div>
              <div className={styles.each_ad}>
                <Link href="/">
                  <Image src={RightBanner} width={300} height={200} alt="" />
                </Link>
              </div>
              <div className={styles.each_ad}>
                <Link href="/">
                  <Image src={RightBanner} width={300} height={200} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  </>
  )
}

export default Health