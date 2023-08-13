import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "@/styles/globals.css";
import Topheader from "../../components/Topheader";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "@/styles/Home.module.css";
import Hottopic from "../../components/Hottopic";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isAdminPage = router.pathname === "/admin";
  const isDashboardPage = router.pathname.startsWith("/dashboard");
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;

        const res = await fetch("https://www.bimaabazar.com/newsportal/news/", {
          headers: {
            'X-API-Key': apiKey,
          },
        });

        if (res.ok) {
          const data = await res.json();
          const sortedData = data.sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at)
          );
          setNewsData(sortedData);
        } else {
          console.error("Failed to fetch news data.");
        }
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
    <SessionProvider session={pageProps.session}>
      <>
        <div className={styles.home_container}>
          {!isAdminPage && !isDashboardPage && <Topheader />}
          {!isAdminPage && !isDashboardPage && <Navbar />}
          {!isAdminPage && !isDashboardPage && <Hottopic newsData={newsData} />}
          <Component {...pageProps} />
          {!isAdminPage && !isDashboardPage && <Footer />}
        </div>
      </>
    </SessionProvider>
  );
}
