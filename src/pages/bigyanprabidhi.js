import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import ANSU from "../../public/ANSU.jpg";
import digital from "../../public/digital.jpg";
import prachar from "../../public/prachar.gif";
import rightbanner1 from "../../public/rightbanner1.gif";
import { MdArrowForwardIos, MdArrowForward } from "react-icons/md";

const bigyanprabidhi = ({bigyanprabidhisamachar}) => {
  const bigyan = bigyanprabidhisamachar[0];
  const bigyanremain = bigyanprabidhisamachar.slice(1);
  return (
    <section className={styles.bijnesh_samachar}>
      <div className={styles.news_container}>
        <div className={styles.col_left}>
          <div className={styles.section_title}>
            <h2 className={styles.title_part}>
              विज्ञान प्रविधि
            </h2>
          </div>
          <div className={styles.grid_12}>
            <div className={styles.span_12}>
              <div className={styles.samachar_spot_news}>
                <div className={styles.post_img}>
                  <Link href={`/news/${bigyan.id}`}>
                    <Image
                      src={`https://www.bimaabazar.com/${bigyan.image1}`}
                      alt="bigyan"
                      width={580}
                      height={508}
                    />
                  </Link>
                </div>
                <div className={styles.post_title_3}>
                  <Link href={`/news/${bigyan.id}`}>
                    <h4>{bigyan.title}</h4>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className={styles.home_samachar}
              data-device-type="desktop"
            ></div>
            {bigyanremain.map((bigyanre) => (
              <div className={styles.span_4}>
                <div className={styles.pradesh_post_news}>
                  <Link
                    className={styles.pradesh_post_news}
                    href={`/news/${bigyanre.id}`}
                  >
                    <Image
                      src={`https://www.bimaabazar.com/${bigyanre.image1}`}
                      alt="bigyan"
                      width={276}
                      height={165}
                    />
                    <div className={styles.post_content_wrap}>
                      <h2>{bigyanre.title}</h2>
                    </div>
                  </Link>
                </div>
              </div>
             ))}
          </div>
        </div>
        <div className={styles.col_right}>
          <div className={styles.trending_vertical}>
            <h2>प्रविधि</h2>
            <ul className={styles.t_news}>
              {/* <li>
                <div className={styles.p_news}>
                  <Link href="/">
                    <span className={styles.trending_counter1}>
                      <MdArrowForward />
                    </span>
                    <div className={styles.pradesh_content_wrap}>
                      <h2 className={styles.pradesh_title_text}>
                        ललिता निवास प्रकरणमा तीन जनालाई पक्राउ गर्नुको आधार र
                        कारण पेश गर्न सर्वोच्चको आदेश
                      </h2>
                    </div>
                    <Image src={ANSU} width={90} height={68} alt="" />
                  </Link>
                </div>
              </li>
              <li>
                <div className={styles.p_news}>
                  <Link href="/">
                    <span className={styles.trending_counter1}>
                      <MdArrowForward />
                    </span>
                    <div className={styles.pradesh_content_wrap}>
                      <h2 className={styles.pradesh_title_text}>
                        ललिता निवास प्रकरणमा तीन जनालाई पक्राउ गर्नुको आधार र
                        कारण पेश गर्न सर्वोच्चको आदेश
                      </h2>
                    </div>
                    <Image src={ANSU} width={90} height={68} alt="" />
                  </Link>
                </div>
              </li>
              <li>
                <div className={styles.p_news}>
                  <Link href="/">
                    <span className={styles.trending_counter1}>
                      <MdArrowForward />
                    </span>
                    <div className={styles.pradesh_content_wrap}>
                      <h2 className={styles.pradesh_title_text}>
                        ललिता निवास प्रकरणमा तीन जनालाई पक्राउ गर्नुको आधार र
                        कारण पेश गर्न सर्वोच्चको आदेश
                      </h2>
                    </div>
                    <Image src={ANSU} width={90} height={68} alt="" />
                  </Link>
                </div>
              </li>
              <li>
                <div className={styles.p_news}>
                  <Link href="/">
                    <span className={styles.trending_counter1}>
                      <MdArrowForward />
                    </span>
                    <div className={styles.pradesh_content_wrap}>
                      <h2 className={styles.pradesh_title_text}>
                        ललिता निवास प्रकरणमा तीन जनालाई पक्राउ गर्नुको आधार र
                        कारण पेश गर्न सर्वोच्चको आदेश
                      </h2>
                    </div>
                    <Image src={ANSU} width={90} height={68} alt="" />
                  </Link>
                </div>
              </li>
              <li>
                <div className={styles.p_news}>
                  <Link href="/">
                    <span className={styles.trending_counter1}>
                      <MdArrowForward />
                    </span>
                    <div className={styles.pradesh_content_wrap}>
                      <h2 className={styles.pradesh_title_text}>
                        ललिता निवास प्रकरणमा तीन जनालाई पक्राउ गर्नुको आधार र
                        कारण पेश गर्न सर्वोच्चको आदेश
                      </h2>
                    </div>
                    <Image src={ANSU} width={90} height={68} alt="" />
                  </Link>
                </div>
              </li> */}
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

export default bigyanprabidhi;

export async function getStaticProps() {
  const res = await fetch("https://www.bimaabazar.com/newsportal/news/");
  let newsData = await res.json();
  let bigyanprabidhisamachar = newsData.filter((news) => news.category === 14);
  bigyanprabidhisamachar = bigyanprabidhisamachar.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  return {
    props: {
      bigyanprabidhisamachar,
    },
  };
}
