import Head from "next/head";
import Mukhya from "../../components/Mukhya";
import Entertainment from "../../components/Entertainment";
import Latestnews from "../../components/Latestnews";
import Samachar from "../../components/Samachar";
import Aarthik from "../../components/Aarthik";
import Rajniti from "../../components/Rajniti";
import BigyanPrabhidhi from "../../components/BigyanPrabhidhi";
import Khelkud from "../../components/Khelkud";
import Health from "../../components/Health";
import International from "../../components/International";
import Interview from "../../components/Interview";


export default function Home({ newsData, mukhyaNews ,samacharNews,aarthikNews,rajnitiNews,bigyanprabidhiNews,entertainmentNews,khelkudNews,healthNews,internationalNews,interviewNews,thoughtNews}) {
  const latestNews = newsData.filter((news) => news.latest);
  const trendingNews =newsData.filter((news) => news.trending);

  return (
    <>
      <Head>
        <title>abiralsanchar</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {latestNews.slice(0, 5).map((news) => {
        return <Latestnews key={news.id} news={news} />;
      })}
      <Mukhya mukhyaNews={mukhyaNews} />
      <Samachar  samacharNews={samacharNews} />
      <Aarthik aarthikNews={aarthikNews}/>
      <Rajniti rajnitiNews={rajnitiNews} trendingNews={trendingNews}/>
      <Entertainment entertainmentNews={entertainmentNews}/>
      <BigyanPrabhidhi bigyanprabidhiNews={bigyanprabidhiNews}/>
      <Khelkud khelkudNews={khelkudNews}/>
      <Health healthNews={healthNews}/>
      <International internationalNews={internationalNews}/>
      <Interview interviewNews={interviewNews} thoughtNews={thoughtNews}/>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://www.bimaabazar.com/newsportal/news/");

  let newsData = await res.json();
  newsData = newsData.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  let mukhyaNews = newsData.filter((news) => news.category === 18);
  mukhyaNews = mukhyaNews.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );
  let samacharNews = newsData.filter((news) => news.category === 8);
  samacharNews = samacharNews.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );
  let aarthikNews = newsData.filter((news) => news.category === 10);
  aarthikNews = aarthikNews.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );
  let rajnitiNews = newsData.filter((news) => news.category === 9);
  rajnitiNews = rajnitiNews.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );
  let entertainmentNews = newsData.filter((news) => news.category === 17);
  entertainmentNews = entertainmentNews.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  let bigyanprabidhiNews = newsData.filter((news) => news.category === 11);
  bigyanprabidhiNews = bigyanprabidhiNews.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  let khelkudNews = newsData.filter((news) => news.category === 13);
  khelkudNews = khelkudNews.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );
  let healthNews = newsData.filter((news) => news.category === 12);
  healthNews = healthNews.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );
  let internationalNews = newsData.filter((news) => news.category === 15);
  internationalNews = internationalNews.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );
  let interviewNews = newsData.filter((news) => news.category === 16);
  interviewNews = interviewNews.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );
  let thoughtNews = newsData.filter((news) => news.category === 16);
  thoughtNews = thoughtNews.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );



  return {
    props: {
      newsData,
      mukhyaNews,
      samacharNews,
      aarthikNews,
      rajnitiNews,
      entertainmentNews,
      bigyanprabidhiNews,
      khelkudNews,
      healthNews,
      internationalNews,
      interviewNews,
      thoughtNews,
    },
  };
}
