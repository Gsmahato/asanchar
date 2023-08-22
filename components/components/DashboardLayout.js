import React,{useEffect} from "react";
import styles from "@/styles/Home.module.css";
import DashSidebar from "./DashSidebar";
import DashNavbar from "./DashNavbar";
import { useRouter } from "next/router";

const DashboardLayout = ({ children}) => {
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");

    if (!accessToken) {
      router.push("/admin");
    }
  }, [router]);

  return (
    <>
        <DashNavbar />
        <DashSidebar />
        <div className={styles.admindashcontainer}>{children}</div>
    </>
  );
};

export default DashboardLayout;
