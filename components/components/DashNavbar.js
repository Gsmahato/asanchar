import React from "react";
import styles from "@/styles/Admin.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const DashNavbar = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    router.push("/admin");
  };
  return (
    <>
      <div className={styles.dashnav}>
        <div className={styles.dashnavbar}>
          <div className={styles.user_tools}>
            Welcome,
            <strong></strong>.
            <Link href="https://www.abiralsanchar.com/">View site</Link> /
            <Link href="/dashboard/changepassword/">Change password</Link> /
            <button className={styles.admin_btn} onClick={handleLogout}>
              Log out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashNavbar;
