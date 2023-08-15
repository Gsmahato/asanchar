import React, { useEffect } from "react";
import DashboardLayout from "../../../components/components/DashboardLayout";
import styles from "@/styles/Admin.module.css";
import { useRouter } from "next/router";

const DashHome = () => {
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");

    if (!accessToken) {
      router.push("/admin");
    }
  }, [router]);

  return (
    <DashboardLayout>
      <div className={styles.dashcontenthome}>Welcome! To Admin DashBoard!</div>
    </DashboardLayout>
  );
};

export default DashHome;
