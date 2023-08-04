import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function SideMenu({ onClose }) {
  const handleCloseMenu = () => {
    onClose();
  };
  return (
    <>
      <div className={styles.side_menu}>
        <span className={styles.close_menu} onClick={handleCloseMenu}>
          +
        </span>
        <div className={styles.side_menu_item}>
          <ul>
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
        </div>
      </div>
    </>
  );
}
