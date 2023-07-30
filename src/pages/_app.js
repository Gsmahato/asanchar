import "@/styles/globals.css";
import Topheader from "../../components/Topheader";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "@/styles/Home.module.css"
import Hottopic from "../../components/Hottopic";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className={styles.home_container}>
        <Topheader/>
        <Navbar/>
        <Hottopic/>
        <Component {...pageProps} />
        <Footer/>
      </div>
    </>
  );
}
