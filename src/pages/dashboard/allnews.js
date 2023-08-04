import React, { useEffect, useState } from "react";
import DashboardLayout from "../../../components/components/DashboardLayout";
import styles from "@/styles/Admin.module.css";

const allnews = () => {
  const [newsList, setNewsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchNewsList = async () => {
      try {
        const response = await fetch(
          "https://www.bimaabazar.com/newsportal/news/"
        );
        if (response.ok) {
          const data = await response.json();
          setNewsList(data);
        } else {
          console.error("Failed to fetch news articles.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchNewsList();
  }, []);

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this news article?"
    );
    if (!isConfirmed) {
      return; // Cancel deletion
    }

    try {
      const response = await fetch(
        `https://www.bimaabazar.com/newsportal/news/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        console.log("News article deleted successfully!");
        setNewsList((prevNewsList) =>
          prevNewsList.filter((news) => news.id !== id)
        );
      } else {
        console.error("Failed to delete news article.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Calculate the current items to display based on pagination
  const reversedNewsList = [...newsList].reverse();
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentNewsList = reversedNewsList.slice(
  indexOfFirstItem,
  indexOfLastItem
);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <DashboardLayout>
      <div className={styles.app_main_outer}>
        <div className={styles.app_main_inner}>
          <div className={styles.row}>
            <div className={styles.main_content}>
              <div className={styles.main_content_bar}>&nbsp;</div>
              <span className={styles.main_content_title}>All News</span>
              <div>
                <div className={styles.write_content}>
                  <h4>Create News</h4>
                  <table className={styles.news_table}>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentNewsList.map((news, index) => (
                        <tr key={news.id}>
                          <td>{indexOfFirstItem + index + 1}</td>
                          <td>{news.title}</td>
                          <td>
                            <button
                              onClick={() => {
                                console.log(
                                  "Edit clicked for news ID:",
                                  news.id
                                );
                              }}
                            >
                              Edit
                            </button>
                          </td>
                          <td>
                            <button onClick={() => handleDelete(news.id)}>
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className={styles.pagination}>
                  {Array.from({ length: Math.ceil(newsList.length / itemsPerPage) }).map((_, index) => (
                    <span key={index} onClick={() => paginate(index + 1)}>
                      {index + 1}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default allnews;
