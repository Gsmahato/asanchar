import { useRouter } from "next/router";
import { useEffect,useState } from "react";
import "@/styles/globals.css";
import Topheader from "../../components/Topheader";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "@/styles/Home.module.css";
import Hottopic from "../../components/Hottopic";

export default function App({ Component, pageProps}) {
  const router = useRouter();
  const isAdminPage = router.pathname === "/admin";
  const isDashboardPage = router.pathname.startsWith("/dashboard");
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const res = await fetch("https://www.bimaabazar.com/newsportal/news/");
        const data = await res.json();
        const sortedData = data.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        setNewsData(sortedData);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchNewsData();
  }, []);


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
        {!isAdminPage && !isDashboardPage && <Hottopic newsData={newsData} />} {/* Pass newsData as a prop */}
        <Component {...pageProps} />
        {!isAdminPage && !isDashboardPage && <Footer />}
      </div>
    </>
  );
}


