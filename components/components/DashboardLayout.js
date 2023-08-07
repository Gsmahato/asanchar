import React from "react";
import styles from "@/styles/Home.module.css";
import DashSidebar from "./DashSidebar";
import DashNavbar from "./DashNavbar";

const DashboardLayout = ({ children, session }) => {
  return (
    <>
        <DashNavbar />
        <DashSidebar />
        <div className={styles.admindashcontainer}>{children}</div>
    </>
  );
};

export default DashboardLayout;
