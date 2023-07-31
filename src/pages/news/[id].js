import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import rightbanner1 from "../../../public/rightbanner1.gif";
import {
  FaRegCommentAlt,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaFacebookMessenger,
  FaWhatsapp,
  FaRegClock,
} from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";

function Newspage({ news }) {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [titleFontSize, setTitleFontSize] = useState("65px");
  const scrollThreshold = 100;
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > scrollThreshold && !isScrollingDown) {
      setIsScrollingDown(true);
    } else if (scrollY <= scrollThreshold && isScrollingDown) {
      setIsScrollingDown(false);
    }

    const newSize = isScrollingDown ? 32 : 65;
    setTitleFontSize(`${newSize}px`);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrollingDown]);
  return (
    <div>
      <section className={styles.news_details}>
        <div className={styles.ad_banner}></div>
      </section>
      <div className={styles.details_container}>
        <article className={styles.news_container_details}>
          <div className={styles.left_fixed_details}>
            <div className={styles.post_title_left}>
              <div className={styles.comment_number}>
                <Link href="/">
                  <i className={styles.comm_icon}>
                    <FaRegCommentAlt />
                  </i>
                </Link>
                <span className={styles.comment_num}>0</span>
                <span>COMMENTS</span>
              </div>
              <div className={styles.share_number}>
                <div className={styles.share_button}>
                  <div className={styles.share_total}>
                    <span className={styles.st_label}>110</span>
                    <span className={styles.st_shares}>Shares</span>
                  </div>
                  <div className={styles.fst_btn}>
                    <Link href="/">
                      <i className={styles.comm_icon1}>
                        <FaTwitter />
                      </i>
                    </Link>
                  </div>
                  <div className={styles.fst_btn}>
                    <Link href="/">
                      <i className={styles.comm_icon3}>
                        <FaInstagram />
                      </i>
                    </Link>
                  </div>
                  <div className={styles.fst_btn}>
                    <Link href="/">
                      <i className={styles.comm_icon4}>
                        <FaFacebookMessenger />
                      </i>
                    </Link>
                  </div>
                  <div className={styles.fst_btn}>
                    <Link href="/">
                      <i className={styles.comm_icon5}>
                        <FaWhatsapp />
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.middle_details}>
            <div className={styles.entry_title_wrapper}>
              <h1
                className={styles.entry_title}
                style={{ fontSize: titleFontSize }}
              >
                {news.title}
              </h1>
            </div>
            <div className={styles.middle_title}>
              <div className={styles.entry_header}>
                <div className={styles.entry_right_title}>
                  <h2></h2>
                  <section className={styles.news_details}>
                    <div className={styles.ad_banner}></div>
                  </section>
                  <div className={styles.title_info22}>
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
                      <span>{news.created_at}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.middle_content}>
              <div className={styles.entry_content}>
                <div></div>
                <div className={styles.feature_img}>
                  <div className={styles.post_thumbnails}>
                    <Image
                      src={`https://www.bimaabazar.com/${news.image1}`}
                      alt=""
                      width={750}
                      height={400}
                    />
                  </div>
                </div>
                <div className={styles.post_content_wrap}>
                  <p>{news.content}</p>
                </div>
              </div>
              <div className={styles.bijnesh_right}>
                <div className={styles.sticky_sidebar}>
                  <div className={styles.sidebar_card_news}>
                    <span className={styles.bijnesh_news_tag}>कर्पोरेट</span>
                    <div className={styles.bijnesh_post_1tr}>
                      <Link href="/">
                        <div className={styles.bijnesh_content_wrap}>
                          <h2 className={styles.title_txt}>
                            एनआईसी एशिया बैंकका ग्राहकलाई ‘लेट मि इन’मा १०
                            प्रतिशतसम्म छुट
                          </h2>
                        </div>
                      </Link>
                    </div>
                    <div className={styles.bijnesh_post_1tr}>
                      <Link href="/">
                        <div className={styles.bijnesh_content_wrap}>
                          <h2 className={styles.title_txt}>
                            एनआईसी एशिया बैंकका ग्राहकलाई ‘लेट मि इन’मा १०
                            प्रतिशतसम्म छुट
                          </h2>
                        </div>
                      </Link>
                    </div>
                    <div className={styles.bijnesh_post_1tr}>
                      <Link href="/">
                        <div className={styles.bijnesh_content_wrap}>
                          <h2 className={styles.title_txt}>
                            एनआईसी एशिया बैंकका ग्राहकलाई ‘लेट मि इन’मा १०
                            प्रतिशतसम्म छुट
                          </h2>
                        </div>
                      </Link>
                    </div>
                    <div className={styles.bijnesh_post_1tr}>
                      <Link href="/">
                        <div className={styles.bijnesh_content_wrap}>
                          <h2 className={styles.title_txt}>
                            एनआईसी एशिया बैंकका ग्राहकलाई ‘लेट मि इन’मा १०
                            प्रतिशतसम्म छुट
                          </h2>
                        </div>
                      </Link>
                    </div>
                    <Link href="/" className={styles.all_btn}>
                      <span>सबै</span>
                      <i className={styles.all_arrow}>
                        <MdArrowForwardIos />
                      </i>
                    </Link>
                  </div>
                  <div className={styles.bijnesh_right_2}>
                    <div className={styles.side_ad}>
                      <div
                        className={styles.desktop_mukhya_ad}
                        data-alias="home-mukhya-right"
                        data-device-type="desktop"
                      >
                        <div className={styles.each_ad}>
                          <Link href="/">
                            <Image
                              src={rightbanner1}
                              width={300}
                              height={150}
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className={styles.each_ad}>
                          <Link href="/">
                            <Image
                              src={rightbanner1}
                              width={300}
                              height={150}
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className={styles.each_ad}>
                          <Link href="/">
                            <Image
                              src={rightbanner1}
                              width={300}
                              height={150}
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://www.bimaabazar.com/newsportal/news/");
  const newsList = await res.json();

  const paths = newsList.map((news) => ({
    params: { id: news.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://www.bimaabazar.com/newsportal/news/${params.id}`
  );
  const news = await res.json();

  return { props: { news } };
}

export default Newspage;
