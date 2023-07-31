import React from "react";

import styles from "@/styles/Home.module.css";
import DashSidebar from "./DashSidebar";
import DashNavbar from "./DashNavbar";


const DashboardLayout = ({ children }) => {
  return (
    <>
    <DashNavbar/>
    <DashSidebar/>
      <div className={styles.home_container}>{children}</div>
    </>
  );
};

export default DashboardLayout;
