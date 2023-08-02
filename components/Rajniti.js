import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import ANSU from "../public/ANSU.jpg";
import digital from "../public/digital.jpg";
import prachar from "../public/prachar.gif";
import rightbanner1 from "../public/rightbanner1.gif";
import { MdArrowForwardIos } from "react-icons/md";

const Rajniti = ({rajnitiNews,trendingNews}) => {
  const trendzero = trendingNews[0];
  const trendone = trendingNews[1];
  const trendtwo = trendingNews[2];
  const trendthree = trendingNews[3];
  const trendfour = trendingNews[4];
  const rajnitifirst = rajnitiNews[0];
  const rajnitisecond = rajnitiNews.slice(1, 7);
  return (
    <section className={styles.bijnesh_samachar}>
      <div className={styles.news_container}>
        <div className={styles.col_left}>
          <div className={styles.section_title}>
            <h2 className={styles.title_part}>
              राजनीति
              <ul className={styles.title_pradesh_num}>
                <Link href="/">१</Link>
                <Link href="/">२</Link>
                <Link href="/">३</Link>
                <Link href="/">४</Link>
                <Link href="/">५</Link>
                <Link href="/">६</Link>
                <Link href="/">७</Link>
              </ul>
              <Link href="/rajniti">
                <i className={styles.F_arrow}>
                  <MdArrowForwardIos />
                </i>
              </Link>
            </h2>
          </div>
          <ul className={styles.title_pradesh_num_2}>
            <Link href="/">१</Link>
            <Link href="/">२</Link>
            <Link href="/">३</Link>
            <Link href="/">४</Link>
            <Link href="/">५</Link>
            <Link href="/">६</Link>
            <Link href="/">७</Link>
          </ul>
          <div className={styles.grid_12}>
            <div className={styles.span_12}>
              <div className={styles.samachar_spot_news}>
                <div className={styles.post_img}>
                  <Link href={`/news/${rajnitifirst.id}`}>
                    <Image src={`https://www.bimaabazar.com/${rajnitifirst.image1}`} alt="rajniti" width={580} height={508} />
                  </Link>
                </div>
                <div className={styles.post_title_3}>
                  <Link href={`/news/${rajnitifirst.id}`}>
                    <h4>
                      {rajnitifirst.title}
                    </h4>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className={styles.home_samachar}
              data-device-type="desktop"
            ></div>
            {rajnitisecond.map((ranews)=>(
            <div className={styles.span_4} key={ranews.id}>
              <div className={styles.pradesh_post_news}>
                <Link className={styles.pradesh_post_news} href={`/news/${ranews.id}`}>
                  <Image src={`https://www.bimaabazar.com/${ranews.image1}`} alt="rajniti" width={276} height={165} />
                  <div className={styles.post_content_wrap}>
                    <h2>{ranews.title}</h2>
                  </div>
                </Link>
              </div>
            </div>
            ))}
           
          </div>
        </div>
        <div className={styles.col_right}>
          <div className={styles.trending_vertical}>
            <h2>ट्रेन्डिङ</h2>
            <ul className={styles.t_news}>
              <li>
                <div className={styles.p_news}>
                  <Link href={`/news/${trendzero.id}`}>
                    <span className={styles.trending_counter}>१</span>
                    <div className={styles.pradesh_content_wrap}>
                      <h2 className={styles.pradesh_title_text}>
                        {trendzero.title}
                      </h2>
                    </div>
                    <Image src={`https://www.bimaabazar.com/${trendzero.image1}`} width={90} height={68} alt="trending" />
                  </Link>
                </div>
              </li>
              <li>
                <div className={styles.p_news}>
                  <Link href={`/news/${trendone.id}`}>
                    <span className={styles.trending_counter}>२</span>
                    <div className={styles.pradesh_content_wrap}>
                      <h2 className={styles.pradesh_title_text}>
                        {trendone.title}
                      </h2>
                    </div>
                    <Image src={`https://www.bimaabazar.com/${trendone.image1}`} width={90} height={68} alt="trending" />
                  </Link>
                </div>
              </li>
              <li>
                <div className={styles.p_news}>
                  <Link href={`/news/${trendtwo.id}`}>
                    <span className={styles.trending_counter}>३</span>
                    <div className={styles.pradesh_content_wrap}>
                      <h2 className={styles.pradesh_title_text}>
                        {trendtwo.title}
                      </h2>
                    </div>
                    <Image src={`https://www.bimaabazar.com/${trendtwo.image1}`} width={90} height={68} alt="trending" />
                  </Link>
                </div>
              </li>
              <li>
                <div className={styles.p_news}>
                  <Link href={`/news/${trendthree.id}`}>
                    <span className={styles.trending_counter}>४</span>
                    <div className={styles.pradesh_content_wrap}>
                      <h2 className={styles.pradesh_title_text}>
                        {trendthree.title}
                      </h2>
                    </div>
                    <Image src={`https://www.bimaabazar.com/${trendthree.image1}`} width={90} height={68} alt="trending" />
                  </Link>
                </div>
              </li>
              <li>
                <div className={styles.p_news}>
                  <Link href={`/news/${trendfour.id}`}>
                    <span className={styles.trending_counter}>५</span>
                    <div className={styles.pradesh_content_wrap}>
                      <h2 className={styles.pradesh_title_text}>
                        {trendfour.title}
                      </h2>
                    </div>
                    <Image src={`https://www.bimaabazar.com/${trendfour.image1}`} width={90} height={68} alt="trending" />
                  </Link>
                </div>
              </li>
              
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

export default Rajniti;
