import React, { useState, useEffect } from "react";
import styles from "../../styles/Admin.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import DashboardLayout from "../../../components/components/DashboardLayout";

const postnews = () => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [featured, setFeatured] = useState(false);
  const [trending, setTrending] = useState(false);
  const [latest, setLatest] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://www.bimaabazar.com/newsportal/categories/"
        );
        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        } else {
          console.error("Failed to fetch categories.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setImageFile(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedCategory = categories.find(
      (cat) => cat.id === parseInt(category)
    );

    const formData = new FormData();
    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("content", content);
    formData.append("author", "1");
    formData.append("category", selectedCategory.id);
    formData.append("featured", featured);
    formData.append("latest", latest ? 1 : 0);
    formData.append("trending", 1);
    if (imageFile) {
      formData.append("image1", imageFile, imageFile.name);
    }
    console.log(imageFile);
    console.log(image);
    console.log(formData);

    try {
      const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;

      const response = await fetch(
        "https://www.bimaabazar.com/newsportal/news/",
        {
          method: "POST",
          headers: {
            "X-API-Key": apiKey,
          },
          body: formData,
        }
      );
      if (response.ok) {
        setTitle("");
        setSlug("");
        setContent("");
        setAuthor("");
        setCategory("");
        setFeatured(false);
        setLatest(false);
        setTrending(false);
        setImageFile(null);
        setImage(null);
        toast.success("News Posted successfully", {
          position: toast.POSITION.TOP_CENTER,
        });

      } else {
        console.log("An error occurred");
        toast.error("failed", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("failed", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  return (
    <DashboardLayout>
      <div className={styles.app_main_outer}>
        <div className={styles.app_main_inner}>
          <div className={styles.row}>
            <div className={styles.main_content}>
              <div className={styles.main_content_bar}>&nbsp;</div>
              <span className={styles.main_content_title}>New News</span>
              <div>
                <div className={styles.write_content}>
                  <h4>Create News</h4>
                  <form onSubmit={handleSubmit} className={styles.news_form}>
                    <ul>
                      <li>
                        <div className={styles.row}>
                          <div className={styles.content_col}>
                            <div className={styles.content_col_form_group}>
                              <input
                                type="text"
                                name="news_title"
                                required
                                placeholder="News title *"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.row}>
                          <div className={styles.content_col}>
                            <div className={styles.content_col_form_group}>
                              <input
                                type="text"
                                name="news_slug"
                                required
                                placeholder="Slug *"
                                value={slug}
                                onChange={(e) => setSlug(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.row}>
                          <div className={styles.content_col}>
                            <div className={styles.content_col_form_group}>
                              <textarea
                                name="news_content"
                                required
                                placeholder="News content *"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.row}>
                          <div className={styles.content_col}>
                            <div className={styles.content_col_form_group}>
                              <label>Choose feature image</label>
                              <input
                                type="file"
                                name="image"
                                onChange={handleImageChange}
                                className={styles.form_control}
                              />
                              {image && (
                                <Image
                                  src={image}
                                  width={50}
                                  height={50}
                                  alt="Selected"
                                />
                              )}
                            </div>
                          </div>
                        </div>
                        <div className={styles.row}>
                          <div className={styles.content_col}>
                            <div className={styles.content_col_form_group}>
                            <input
                                type="text"
                                name="author"
                                required
                                placeholder="author *"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.row}>
                          <div className={styles.content_col}>
                            <div className={styles.content_col_form_group}>
                              <label>Select Category</label>
                              <select
                                name="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                              >
                                <option value="">Select a category</option>
                                {categories.map((categoryItem) => (
                                  <option
                                    key={categoryItem.id}
                                    value={categoryItem.id}
                                  >
                                    {categoryItem.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className={styles.row}>
                          <div className={styles.content_col}>
                            <div className={styles.content_col_form_group}>
                              <div>
                                <label>
                                  <input
                                    type="checkbox"
                                    name="featured"
                                    checked={featured}
                                    onChange={(e) =>
                                      setFeatured(e.target.checked)
                                    }
                                  />
                                  Featured
                                </label>
                                <label>
                                  <input
                                    type="checkbox"
                                    name="latest"
                                    checked={latest}
                                    onChange={(e) =>
                                      setLatest(e.target.checked)
                                    }
                                  />
                                  Latest News
                                </label>
                                <label>
                                  <input
                                    type="checkbox"
                                    name="trending"
                                    checked={trending}
                                    onChange={(e) =>
                                      setTrending(e.target.checked)
                                    }
                                  />
                                  Trending News
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.row}>
                          <div className={styles.content_col}>
                            <button
                              type="submit"
                              className={styles.content_submit_btn}
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </form>
                  <ToastContainer/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default postnews;
