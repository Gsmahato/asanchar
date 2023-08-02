import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import logo from "../public/abiralsancharlogo.svg";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className={styles.site_footer}>
        <div className={styles.footer_container}>
          <div className={styles.flx_wrap}>
            <div>
              <h4>समाचार</h4>

              <ul>
                <li className={styles.footerdata}>
                  <Link href="/rajniti">राजनीति</Link>
                </li>
                <li className={styles.footerdata}>
                <Link href="/aarthik">आर्थिक</Link>
                </li>
                <li className={styles.footerdata}>
                <Link href="/bigyanprabidhi">विज्ञान प्रविधि</Link>
                </li>
                <li className={styles.footerdata}>
                <Link href="/swastha">स्वास्थ्य</Link>
                </li>
                <li className={styles.footerdata}>
                <Link href="/khelkud">खेलकुद</Link>
                </li>
                <li className={styles.footerdata}>
                <Link href="/bichar">विचार</Link>
                </li>
                <li className={styles.footerdata}>
                <Link href="/antarastriya">अन्तराष्ट्रिय</Link>
                </li>
                <li className={styles.footerdata}>
                <Link href="/antarbarta">अन्तर्वार्ता</Link>
                </li>
                <li className={styles.footerdata}>
                <Link href="/manoranjan">मनोरञ्जन / भिडियो</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>आर्थिक</h4>
              <ul>
                {/* <li>
                  <Link href="/">समाज</Link>
                </li>
                <li>
                  <Link href="/">समाज</Link>
                </li>
                <li>
                  <Link href="/">समाज</Link>
                </li>
                <li>
                  <Link href="/">समाज</Link>
                </li>
                <li>
                  <Link href="/">समाज</Link>
                </li> */}
              </ul>
            </div>
            <div>
              <h4>मनोरञ्जन</h4>
              <ul>
                {/* <li>
                  <Link href="/">समाज</Link>
                </li>
                <li>
                  <Link href="/">समाज</Link>
                </li>
                <li>
                  <Link href="/">समाज</Link>
                </li>
                <li>
                  <Link href="/">समाज</Link>
                </li>
                <li>
                  <Link href="/">समाज</Link>
                </li> */}
              </ul>
            </div>
            <div>
              <h4>विशेष श्रृंखला</h4>
              <ul>
                {/* <li>
                  <Link href="/">समाज</Link>
                </li>
                <li>
                  <Link href="/">समाज</Link>
                </li>
                <li>
                  <Link href="/">समाज</Link>
                </li>
                <li>
                  <Link href="/">समाज</Link>
                </li>
                <li>
                  <Link href="/">समाज</Link>
                </li> */}
              </ul>
            </div>
            <div>
              <h4>अबिरल संचार</h4>
              <ul>
                {/* <li>
                  <Link href="/">समाज</Link>
                </li>
                <li>
                  <Link href="/">समाज</Link>
                </li>
                <li>
                  <Link href="/">समाज</Link>
                </li>
                <li>
                  <Link href="/">प्राइभेसी पोलिसी</Link>
                </li>
                <li>
                  <Link href="/">सम्पर्क</Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.mobfootercontent}>
          <div className={styles.mobfooter}>
            <h4>समाचार</h4>

            <ul>
              {/* {cat.map((category) => ( */}
              <li
                className={styles.footerdata}
                // key={category.id}
                onClick={() => handleMenuItemClick(category.id)}
              >
                {/* {category.name} */}
                hello
              </li>
              {/* ))} */}
            </ul>
          </div>
        </div>
      </footer>
      <div className={styles.footer_info}>
        <div className={styles.footer_container}>
          <div>
            <div className={styles.logo_wrap}>
              <Link href="/">
                <Image src={logo} width={40} height={40} alt="" />
              </Link>
            </div>
          </div>
          <div className={styles.footer_editor_info}>
            <h5>
              <span>संचालक सम्पादक : </span>अभिनास केसी
            </h5>
          </div>
          <div className={styles.footer_editor_info}>
            <h5>
              <span>हाम्रो बारेमा :</span>ए डि के मिडिया प्रा.ली.
            </h5>
            <h5>
              <span>www.abiralsanchar.com</span>
            </h5>
          </div>
          <div className={styles.footer_editor_info}>
            <h5>
              <span>सम्पर्क ठेगाना :</span>काठमाडौं ३१ शान्तीनगर
            </h5>
          </div>
          <div className={styles.footer_editor_info}>
            <h5>
              <span>सम्पर्क नम्बर:</span>+977-9813111540
            </h5>
          </div>
          <div className={styles.footer_contact_info}>
            <div className={styles.social_brands}>
              <Link href="/">
                <i>
                  <FaFacebook />
                </i>
              </Link>
              <Link href="/">
                <i>
                  <FaTwitter />
                </i>
              </Link>
              <Link href="/">
                <i>
                  <FaYoutube />
                </i>
              </Link>
            </div>
            <span className={styles.copyright_text}>
              © २०२३-२०२३ abiralsanchar.com सर्वाधिकार सुरक्षित
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
