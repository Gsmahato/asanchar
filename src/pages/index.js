import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Mukhya from '../../components/Mukhya'
import Entertainment from '../../components/Entertainment'
import Latestnews from '../../components/Latestnews'
import Samachar from '../../components/Samachar'
import Aarthik from '../../components/Aarthik'
import Rajniti from '../../components/Rajniti'
import BigyanPrabhidhi from '../../components/BigyanPrabhidhi'
import Khelkud from '../../components/Khelkud'

// const inter = Inter({ subsets: ['latin'] })

export default function Home({newsData}) {
  return (
    <>
      <Head>
        <title>abiralsanchar</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {newsData.map((news) => {
              return <Latestnews key={news.id} news={news} />;
            })}
      <Mukhya />
      <Samachar />
      <Aarthik />
      <Rajniti />
      <Entertainment />
      <BigyanPrabhidhi />
      <Khelkud />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://www.bimaabazar.com/newsportal/news/");

  const newsData = await res.json();
  // const category = [...new Set(products.map((product) => product.category))];


  return {
    props: {
      newsData,
      // category,
    },
  };
}