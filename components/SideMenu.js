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
              <Link href="/">विजनेस</Link>
            </li>
            <li className={styles.menu_item}>
              <Link href="/">जीवनशैली</Link>
            </li>
            <li className={styles.menu_item}>
              <Link href="/">विजनेस</Link>
            </li>
            <li className={styles.menu_item}>
              <Link href="/">मनोरन्जन</Link>
            </li>
            <li className={styles.menu_item}>
              <Link href="/">मनोरन्जन</Link>
            </li>
            <li className={styles.menu_item}>
              <Link href="/">खेलकुद</Link>
            </li>
            <li className={styles.menu_item}>
              <Link href="/">प्रवास</Link>
            </li>
            <li className={styles.menu_item}>
              <Link href="/">प्रवास</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
