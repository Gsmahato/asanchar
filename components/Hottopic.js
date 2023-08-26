import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { GoSearch } from "react-icons/go";

const Hottopic = ({ newsData }) => {
  const hotnewsdata = newsData.slice(0, 5);
  const [searchQuery, setSearchQuery] = useState("");
  const filteredNewsData = hotnewsdata.filter((hotnews) => {
    const keywords = hotnews.title.toLowerCase().split(" ");
    return keywords.some((keyword) =>
      keyword.includes(searchQuery.trim().toLowerCase())
    );
  });

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div className={styles.hot_topic}>
        <div className={styles.container}>
          {filteredNewsData.map((hotnews) => (
            <div className={styles.topic_tag} key={hotnews.id}>
              <Link href={`/news/${hotnews.id}`}>
                <span className={styles.topic_round}>
                  <Image
                    src={`https://prajjwalacharya.pythonanywhere.com/${hotnews.image1}`}
                    width={100}
                    height={100}
                    alt=""
                  />
                </span>
                {hotnews.title}
              </Link>
            </div>
          ))}
          <div className={styles.smart_search}>
            <form className={styles.top_search} action="/">
              <input
                type="text"
                placeholder="Search Keywords"
                className={styles.search_fields}
                autoComplete="off"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <span className={styles.search_icon}>
                <i>
                  <GoSearch />
                </i>
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hottopic;
