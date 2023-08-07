import React from "react";
import styles from "@/styles/Admin.module.css";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const DashNavbar = () => {
  const { data: session } = useSession();
  const handleLogout = async () => {
    await signOut();
  };

  if (!session) {
    return null;
  }

  return (
    <>
      <div className={styles.dashnav}>
        <div className={styles.dashnavbar}>
          <div className={styles.user_tools}>
            Welcome,
            <strong>{session.user.name}</strong>.
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
