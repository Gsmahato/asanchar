import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import rightbanner1 from "../../../public/rightbanner1.gif";
import {
  FaRegCommentAlt,
  FaTwitter,
  FaFacebook,
  FaFacebookMessenger,
  FaWhatsapp,
  FaRegClock,
} from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import NepaliDate from "nepali-date-converter";

function Newspage({ news }) {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [titleFontSize, setTitleFontSize] = useState("65px");
  const scrollThreshold = 100;

  const handleScroll = () => {
    if (window.innerWidth > 766) {
      const scrollY = window.scrollY;
      if (scrollY > scrollThreshold && !isScrollingDown) {
        setIsScrollingDown(true);
      } else if (scrollY <= scrollThreshold && isScrollingDown) {
        setIsScrollingDown(false);
      }

      const newSize = isScrollingDown ? "26px" : "65px";
      setTitleFontSize(newSize);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrollingDown]);

  const createdDate = new Date(news.created_at);

  const nepaliDate = new NepaliDate(createdDate);

  const nepaliMonths = [
    "बैशाख",
    "जेठ",
    "असार",
    "साउन",
    "भदौ",
    "असोज",
    "कार्तिक",
    "मङ्सिर",
    "पुष",
    "माघ",
    "फाल्गुन",
    "चैत्र",
  ];

  const dayOfWeek = nepaliDate.format("ddd");

  const day = nepaliDate.format("DD");

  const month = nepaliMonths[nepaliDate.format("MM") - 1];

  const year = nepaliDate.format("YYYY");

  const hours = createdDate.getHours();
  const minutes = createdDate.getMinutes();

  const formattedHours = (hours % 12 === 0 ? 12 : hours % 12)
    .toString()
    .padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  const ampm = hours >= 12 ? "PM" : "AM";

  const formattedDateTime = `${dayOfWeek}, ${day} ${month} ${year} ${formattedHours}:${formattedMinutes} ${ampm}`;

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
                <span className={styles.comments}>COMMENTS</span>
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
                        <FaFacebook />
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
              <h1 className={styles.entry_title1}>{news.title}</h1>
            </div>
            <div className={styles.post_title_left1}>
              <div className={styles.comment_number}>
                <Link href="/">
                  <i className={styles.comm_icon}>
                    <FaRegCommentAlt />
                  </i>
                </Link>
                <span className={styles.comment_num}>0</span>
                <span className={styles.comments}>COMMENTS</span>
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
                        <FaFacebook />
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
                      <span>{formattedDateTime}</span>
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
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;

  const res = await fetch("https://www.bimaabazar.com/newsportal/news/", {
    headers: {
      'X-API-Key': apiKey,
    }
  });
  const newsList = await res.json();
  console.log(newsList)

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
