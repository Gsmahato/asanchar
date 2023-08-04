// import React, { useState } from "react";
// import styles from "@/styles/Admin.module.css";

// const EditNews = ({ newsData, onSave }) => {
//     const [title, setTitle] = useState(newsData.title);
//     const [slug, setSlug] = useState(newsData.slug);
//     const [content, setContent] = useState(newsData.content);
//     const [author, setAuthor] = useState(newsData.author);
//     const [category, setCategory] = useState(newsData.category);
//     const [featured, setFeatured] = useState(newsData.featured);
//     const [trending, setTrending] = useState(newsData.trending);
//     const [latest, setLatest] = useState(newsData.latest);
//     const [imageFile, setImageFile] = useState(null);
//     const [image, setImage] = useState(null);
//     const [categories, setCategories] = useState([]);

//   const handleSave = () => {
//     const updatedNewsData = {
//       ...newsData,
//       title,
//       slug,
//       content,
//       author,
//       category,
//       featured,
//       trending,
//       latest,
//       image,

//     };

//     onSave(updatedNewsData);
//   };

//   return (
//     <div className={styles.write_content}>
//       <h4>Edit News</h4>
//       <form onSubmit={handleSubmit} className={styles.news_form}>
//                     <ul>
//                       <li>
//                         <div className={styles.row}>
//                           <div className={styles.content_col}>
//                             <div className={styles.content_col_form_group}>
//                               <input
//                                 type="text"
//                                 name="news_title"
//                                 required
//                                 placeholder="News title *"
//                                 value={title}
//                                 onChange={(e) => setTitle(e.target.value)}
//                               />
//                             </div>
//                           </div>
//                         </div>
//                         <div className={styles.row}>
//                           <div className={styles.content_col}>
//                             <div className={styles.content_col_form_group}>
//                               <input
//                                 type="text"
//                                 name="news_slug"
//                                 required
//                                 placeholder="Slug *"
//                                 value={slug}
//                                 onChange={(e) => setSlug(e.target.value)}
//                               />
//                             </div>
//                           </div>
//                         </div>
//                         <div className={styles.row}>
//                           <div className={styles.content_col}>
//                             <div className={styles.content_col_form_group}>
//                               {/* <NewsEditor
//                               value={content}
//                               onChange={(e) => setContent(e.target.value)}
//                               required
//                               content={content}
//                               setContent={setContent}
//                             /> */}
//                               <textarea
//                                 name="news_content"
//                                 required
//                                 placeholder="News content *"
//                                 value={content}
//                                 onChange={(e) => setContent(e.target.value)}
//                               />
//                             </div>
//                           </div>
//                         </div>
//                         <div className={styles.row}>
//                           <div className={styles.content_col}>
//                             <div className={styles.content_col_form_group}>
//                               <label>Choose feature image</label>
//                               <input
//                                 type="file"
//                                 name="image"
//                                 onChange={handleImageChange}
//                                 className={styles.form_control}
//                               />
//                               {image && (
//                                 <Image
//                                   src={image}
//                                   width={50}
//                                   height={50}
//                                   alt="Selected"
//                                 />
//                               )}
//                             </div>
//                           </div>
//                         </div>
//                         <div className={styles.row}>
//                           <div className={styles.content_col}>
//                             <div className={styles.content_col_form_group}>
//                               <label htmlFor="author">Author</label>
//                               <input
//                                 type="text"
//                                 name="author"
//                                 required
//                                 value={author}
//                                 onChange={(e) => setAuthor(e.target.value)}
//                               />
//                             </div>
//                           </div>
//                         </div>
//                         <div className={styles.row}>
//                           <div className={styles.content_col}>
//                             <div className={styles.content_col_form_group}>
//                               <label>Select Category</label>
//                               <select
//                                 name="category"
//                                 value={category}
//                                 onChange={(e) => setCategory(e.target.value)}
//                                 required
//                               >
//                                 <option value="">Select a category</option>
//                                 {categories.map((categoryItem) => (
//                                   <option
//                                     key={categoryItem.id}
//                                     value={categoryItem.id}
//                                   >
//                                     {categoryItem.name}
//                                   </option>
//                                 ))}
//                               </select>
//                             </div>
//                           </div>
//                         </div>
//                         <div className={styles.row}>
//                           <div className={styles.content_col}>
//                             <div className={styles.content_col_form_group}>
//                               <div>
//                                 <label>
//                                   <input
//                                     type="checkbox"
//                                     name="featured"
//                                     checked={featured}
//                                     onChange={(e) =>
//                                       setFeatured(e.target.checked)
//                                     }
//                                   />
//                                   Featured
//                                 </label>
//                                 <label>
//                                   <input
//                                     type="checkbox"
//                                     name="latest"
//                                     checked={latest}
//                                     onChange={(e) =>
//                                       setLatest(e.target.checked)
//                                     }
//                                   />
//                                   Latest News
//                                 </label>
//                                 <label>
//                                   <input
//                                     type="checkbox"
//                                     name="trending"
//                                     checked={trending}
//                                     onChange={(e) =>
//                                       setTrending(e.target.checked)
//                                     }
//                                   />
//                                   Trending News
//                                 </label>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className={styles.row}>
//                           <div className={styles.content_col}>
//                             <button
//                               type="submit"
//                               className={styles.content_submit_btn}
//                             >
//                               Submit
//                             </button>
//                           </div>
//                         </div>
//                       </li>
//                     </ul>
//                   </form>
//       <button onClick={handleSave} className={styles.content_submit_btn}>
//         Save
//       </button>
//     </div>
//   );
// };

// export default EditNews;
