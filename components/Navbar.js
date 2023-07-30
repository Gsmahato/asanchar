import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import SideMenu from "./SideMenu";
import { PiClockClockwiseFill, PiTrendUp, PiUserCircle } from "react-icons/pi";
import { RiMenuLine, RiMenu2Line } from "react-icons/ri";

export default function Navbar() {
  const [showSideMenu, setShowSideMenu] = useState(false);

  const handleMenuClick = () => {
    setShowSideMenu(!showSideMenu);
  };

  const handleCloseMenu = () => {
    setShowSideMenu(false);
  };

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.menu_container}>
            <ul className={styles.primary_menu}>
              <li className={styles.menu_item}>
                <Link href="/">होमपेज</Link>
              </li>
              <li className={styles.menu_item}>
                <Link href="/samachar">समाचार</Link>
              </li>
              <li className={styles.menu_item}>
                <Link href="/rajniti">राजनीति</Link>
              </li>
              <li className={styles.menu_item}>
                <Link href="/aarthik">आर्थिक</Link>
              </li>
              <li className={styles.menu_item}>
                <Link href="/bigyanprabidhi">विज्ञान प्रविधि</Link>
              </li>
              <li className={styles.menu_item}>
                <Link href="/swastha">स्वास्थ्य</Link>
              </li>
              <li className={styles.menu_item}>
                <Link href="/khelkud">खेलकुद</Link>
              </li>
              <li className={styles.menu_item}>
                <Link href="/bichar">विचार</Link>
              </li>
              <li className={styles.menu_item}>
                <Link href="/antarastriya">अन्तराष्ट्रिय</Link>
              </li>
              <li className={styles.menu_item}>
                <Link href="/antarbarta">अन्तर्वार्ता</Link>
              </li>
              <li className={styles.menu_item}>
                <Link href="/manoranjan">मनोरञ्जन / भिडियो</Link>
              </li>
            </ul>
            {/* <Link className={styles.english_edition} href="/">
              English
            </Link> */}
            {/* <Link
              className={styles.election_edition}
              href="https://election.onlinekhabar.com/"
            >
              चुनाव २०७९
            </Link> */}
            <div className={styles.user_activity}>
              <div className={styles.latest_news}>
                <i className={styles.activity_icon}>
                  <PiClockClockwiseFill />
                </i>
              </div>
              <div className={styles.trending_news}>
                <i className={styles.activity_icon}>
                  <PiTrendUp />
                </i>
              </div>
              <div className={styles.login_account}>
                <i className={styles.activity_icon}>
                  <PiUserCircle />
                </i>
              </div>
              <div className={styles.nav_menu} onClick={handleMenuClick}>
                <i className={styles.activity_icon}>
                  <RiMenuLine />
                </i>
              </div>
              {showSideMenu && <SideMenu onClose={handleCloseMenu} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
