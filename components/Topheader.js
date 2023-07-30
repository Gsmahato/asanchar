"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import logo from "../public/abiralsancharlogo.svg";
import banner from "../public/banner.gif";
import { PiUserCircle } from "react-icons/pi";
import { RiMenuLine } from "react-icons/ri";
import SideMenu from "./SideMenu";
import NepaliDateComponent from "./NepaliDate";

const Topheader = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);

  const handleMenuClick = () => {
    setShowSideMenu(!showSideMenu);
  };

  const handleCloseMenu = () => {
    setShowSideMenu(false);
  };
  return (
    <>
      <div className={styles.topheader}>
        <div className={styles.container}>
          <div className={styles.login_account1}>
            <i className={styles.activity_icon}>
              <PiUserCircle />
            </i>
          </div>
          <div className={styles.logo}>
            <Link href="/">
              <Image src={logo} width={46} height={46} alt="" />
            </Link>
            <div className={styles.currenttime}>
              <NepaliDateComponent />
            </div>
          </div>
          {/* <div className={styles.head_adv}>
            <div className={styles.ad}>
              <Image src={banner} width={700} height={70} alt="" />
            </div>
          </div> */}
          <div className={styles.nav_menu1} onClick={handleMenuClick}>
            <i className={styles.activity_icon}>
              <RiMenuLine />
            </i>
          </div>
          {showSideMenu && <SideMenu onClose={handleCloseMenu} />}
        </div>
      </div>
    </>
  );
};

export default Topheader;
