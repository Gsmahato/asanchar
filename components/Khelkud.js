import React from "react";
import styles from "@/styles/Home.module.css"
import Link from "next/link";
import Image from "next/image";
import ANSU from "../public/ANSU.jpg";
import digital from "../public/digital.jpg";
import prachar from "../public/prachar.gif";
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
  } else if (minutes < 1440) {
    const hours = Math.floor(minutes / 60);
    return `${hours} hours ago`;
  } else {
    const days = Math.floor(minutes / 1440);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }
}

const Khelkud = ({khelkudNews}) => {
  const khelfirst = khelkudNews.slice(0,2)
  const khelsecond = khelkudNews.slice(3,5)

  return (
    <section className={styles.Sports_section}>
      <div className={styles.E_container}>
        <div className={styles.E_section_title}>
          <h2 className={styles.E_title_part}>
          खेलकुद
            <ul className={styles.E_title_cat_menu_2}>
              <Link href="/">गशिप</Link>
              <Link href="/">फिचर</Link>
              <Link href="/">बलिउड / हलिउड</Link>
              <Link href="/">मनोरञ्जन भिडियो</Link>
              <Link href="/">ब्लोअप</Link>
            </ul>
            <Link href="/khelkud">
              <i className={styles.F_arrow}>
                <MdArrowForwardIos />
              </i>
            </Link>
          </h2>
        </div>
        <ul className={styles.E_title_cat_menu_3}>
              <Link href="/">गशिप</Link>
              <Link href="/">फिचर</Link>
              <Link href="/">बलिउड / हलिउड</Link>
              <Link href="/">मनोरञ्जन भिडियो</Link>
              <Link href="/">ब्लोअप</Link>
            </ul>
        <div className={styles.Enter_grid_12}>
          {khelfirst.map((khelnews)=>(
          <div className={styles.merge_2} key={khelnews.id}>
            <div className={styles.Enter_spot_news}>
              <Link href={`/news/${khelnews.id}`}>
                <Image
                  className={styles.M_image}
                  src={`https://www.bimaabazar.com/${khelnews.image1}`}
                  alt="khelkud"
                  width={700}
                  height={600}
                />
                <div className={styles.post_content}>
                  <h2 className={styles.M_title_text}>
                   {khelnews.title}
                  </h2>
                  <div className={styles.title_in}>
                    <div className={styles.M_post_hour}>
                      <i>
                        <FaRegClock />
                      </i>
                      <span>{formatTime(getMinutesAgo(khelnews.created_at))}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          ))}
          {khelsecond.map((knews)=>(
          <div className={styles.span_4}key={knews.id} >
            <div className={styles.Enter_spot_news}>
              <Link href={`/news/${knews.id}`}>
                <Image
                  className={styles.M_image}
                  src={`https://www.bimaabazar.com/${knews.image1}`}
                  alt="khelkud"
                  width={500}
                  height={400}
                />
                <div className={styles.post_content}>
                  <h2 className={styles.E_title_text}>
                    {knews.title}
                  </h2>
                  <div className={styles.title_in}>
                    <div className={styles.M_post_hour}>
                      <i>
                        <FaRegClock />
                      </i>
                      <span>{formatTime(getMinutesAgo(knews.created_at))}</span>
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

export default Khelkud;
