import { useRouter } from "next/router";
import { useEffect } from "react";
import "@/styles/globals.css";
import Topheader from "../../components/Topheader";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "@/styles/Home.module.css";
import Hottopic from "../../components/Hottopic";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isAdminPage = router.pathname === "/admin";
  const isDashboardPage = router.pathname.startsWith("/dashboard");

  useEffect(() => {
    if (isAdminPage || isDashboardPage) {
      document.body.classList.add("admin-page");
    } else {
      document.body.classList.remove("admin-page");
    }
  }, [isAdminPage, isDashboardPage]);

  return (
    <>
      <div className={styles.home_container}>
        {!isAdminPage && !isDashboardPage && <Topheader />}
        {!isAdminPage && !isDashboardPage && <Navbar />}
        {!isAdminPage && !isDashboardPage && <Hottopic />}
        <Component {...pageProps} />
        {!isAdminPage && !isDashboardPage && <Footer />}
      </div>
    </>
  );
}
