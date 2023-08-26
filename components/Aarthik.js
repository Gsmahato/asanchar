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

const Aarthik = ({ aarthikNews }) => {
  const aarthikfirst = aarthikNews[0];
  const aarthiksecond = aarthikNews.slice(1, 13);
  const aarthiklast = aarthikNews.slice(14, 20);

  return (
    <section className={styles.bijnesh_samachar}>
      <div className={styles.news_container}>
        <div className={styles.col_left}>
          <div className={styles.section_title}>
            <h2 className={styles.title_part}>
              आर्थिक
              <ul className={styles.title_cat_menu}>
                <Link href="/">
                  <li>अर्थनीति</li>
                </Link>
                <Link href="/">
                  <li>अर्थनीति</li>
                </Link>
                <Link href="/">
                  <li>अर्थनीति</li>
                </Link>
                <Link href="/">
                  <li>अर्थनीति</li>
                </Link>
                <Link href="/">
                  <li>अर्थनीति</li>
                </Link>
              </ul>
              <Link href="/aarthik">
                <i className={styles.F_arrow}>
                  <MdArrowForwardIos />
                </i>
              </Link>
            </h2>
          </div>
          <ul className={styles.title_cat_menu_mob}>
            <Link href="/">
              <li>अर्थनीति</li>
            </Link>
            <Link href="/">
              <li>अर्थनीति</li>
            </Link>
            <Link href="/">
              <li>अर्थनीति</li>
            </Link>
            <Link href="/">
              <li>अर्थनीति</li>
            </Link>
            <Link href="/">
              <li>अर्थनीति</li>
            </Link>
          </ul>
          <div className={styles.grid_12}>
            <div className={styles.span_12}>
              <div className={styles.samachar_spot_news}>
                <div className={styles.post_img_2}>
                  <Link href={`/news/${aarthikfirst.id}`}>
                    <Image
                      src={`https://prajjwalacharya.pythonanywhere.com/${aarthikfirst.image1}`}
                      alt="aarthik"
                      width={580}
                      height={508}
                    />
                  </Link>
                </div>
                <div className={styles.post_title_2}>
                  <Link href={`/news/${aarthikfirst.id}`}>
                    <h4>{aarthikfirst.title}</h4>
                  </Link>
                  <p>{truncateContent(aarthikfirst.content, 40)}</p>
                </div>
              </div>
            </div>
            <div
              className={styles.home_samachar}
              data-device-type="desktop"
            ></div>
            {aarthiksecond.map((secondnews) => (
              <div className={styles.span_6} key={secondnews.id}>
                <div className={styles.post_1tr}>
                  <Link
                    className={styles.post_con}
                    href={`/news/${secondnews.id}`}
                  >
                    <Image
                      src={`https://prajjwalacharya.pythonanywhere.com/${secondnews.image1}`}
                      alt="aarthik"
                      width={134}
                      height={82}
                    />
                    <div className={styles.content_wrap}>
                      <h2 className={styles.title_text}>{secondnews.title}</h2>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.prachar}>
            <div className={styles.each_ad}>
              <Image src={prachar} alt="" width={888} height={89} />
            </div>
          </div>
          <div className={styles.grid_12}>
            {aarthiklast.map((lastnews) => (
              <div className={styles.span_6} key={lastnews}>
                <div className={styles.post_1tr}>
                  <Link
                    className={styles.post_con}
                    href={`/news/${lastnews.id}`}
                  >
                    <Image
                      src={`https://prajjwalacharya.pythonanywhere.com/${lastnews.image1}`}
                      alt="aarthik"
                      width={134}
                      height={82}
                    />
                    <div className={styles.content_wrap}>
                      <h2 className={styles.title_text}>{lastnews.title}</h2>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
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
                      एनआईसी एशिया बैंकका ग्राहकलाई ‘लेट मि इन’मा १० प्रतिशतसम्म
                      छुट
                    </h2>
                  </div>
                </Link>
              </div>
              <div className={styles.bijnesh_post_1tr}>
                <Link href="/">
                  <div className={styles.bijnesh_content_wrap}>
                    <h2 className={styles.title_txt}>
                      एनआईसी एशिया बैंकका ग्राहकलाई ‘लेट मि इन’मा १० प्रतिशतसम्म
                      छुट
                    </h2>
                  </div>
                </Link>
              </div>
              <div className={styles.bijnesh_post_1tr}>
                <Link href="/">
                  <div className={styles.bijnesh_content_wrap}>
                    <h2 className={styles.title_txt}>
                      एनआईसी एशिया बैंकका ग्राहकलाई ‘लेट मि इन’मा १० प्रतिशतसम्म
                      छुट
                    </h2>
                  </div>
                </Link>
              </div>
              <div className={styles.bijnesh_post_1tr}>
                <Link href="/">
                  <div className={styles.bijnesh_content_wrap}>
                    <h2 className={styles.title_txt}>
                      एनआईसी एशिया बैंकका ग्राहकलाई ‘लेट मि इन’मा १० प्रतिशतसम्म
                      छुट
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
            {/* <div className={styles.bijnesh_right_2}>
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
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aarthik;
