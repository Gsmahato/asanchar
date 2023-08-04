import React, { useState } from "react";
import styles from "@/styles/Admin.module.css";
import {
  RiDashboardLine,
  RiAdminFill,
  RiGridLine,
  RiNewspaperLine,
} from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
// import { AiOutlineClose } from "react-icons/ai";
// import { FiMenu, FiUserPlus } from "react-icons/fi";
import { BiRightArrow, BiDownArrow } from "react-icons/bi";
import Link from "next/link";

const DashSidebar = () => {
  const [isUserVisible, setUserVisible] = useState(false);
  const [isCategoryVisible, setCategoryVisible] = useState(false);
  const [isNewsVisible, setNewsVisible] = useState(false);

  const toggleUser = () => {
    setUserVisible(!isUserVisible);
  };
  const toggleCategory = () => {
    setCategoryVisible(!isCategoryVisible);
  };
  const toggleNews = () => {
    setNewsVisible(!isNewsVisible);
  };
  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.sidebar_scroll}>
          <div className={styles.sidebar_inner}>
            <h5 className={styles.sidebar_heading}>
              <i>
                <RiDashboardLine />
              </i>
              Dashboard
            </h5>
            <div className={styles.multimenu}>
              <ul className={styles.multimenu_container}>
                <li
                  className={`${styles.multimenu_item} ${
                    isUserVisible ? styles.active : ""
                  }`}
                >
                  <div className={styles.subdrop} onClick={toggleUser}>
                    <i>
                      <FaUserAlt />
                    </i>
                    Users
                    <div className={styles.right_icon}>
                      {isUserVisible ? <BiDownArrow /> : <BiRightArrow />}
                    </div>
                  </div>
                  {isUserVisible && (
                    <ul>
                      <li className={styles.list_item}>
                        <Link href="/dashboard/dashHome">
                          <i>
                            <RiAdminFill />
                          </i>
                          Admin
                          <div className={styles.right_icon_2}>
                            <i>
                              <BiRightArrow />
                            </i>
                          </div>
                        </Link>
                      </li>
                      <li className={styles.list_item}>
                        <Link href="/dashboard/dashHome">
                          <i>
                            <RiAdminFill />
                          </i>
                          Sub Admin
                          <div className={styles.right_icon_2}>
                            <i>
                              <BiRightArrow />
                            </i>
                          </div>
                        </Link>
                      </li>
                      <li className={styles.list_item}>
                        <Link href="/dashboard/dashHome">
                          <i>
                            <RiAdminFill />
                          </i>
                          Add Sub Admin
                          <div className={styles.right_icon_2}>
                            <i>
                              <BiRightArrow />
                            </i>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li
                  className={`${styles.multimenu_item} ${
                    isCategoryVisible ? styles.active : ""
                  }`}
                >
                  <div className={styles.subdrop}
                    onClick={toggleCategory}
                  >
                    <i>
                      <i>
                        <RiGridLine />
                      </i>
                    </i>
                    All Categories
                    <div className={styles.right_icon}>
                      {isCategoryVisible ? <BiDownArrow /> : <BiRightArrow />}
                    </div>
                  </div>
                  {isCategoryVisible && (
                    <ul>
                      <li className={styles.list_item}>
                        <Link href="/dashboard/dashCategory">
                          <i>
                            <RiGridLine />
                          </i>
                          All Categories
                          <div className={styles.right_icon_2}>
                            <i>
                              <BiRightArrow />
                            </i>
                          </div>
                        </Link>
                      </li>
                      <li className={styles.list_item}>
                        <Link href="/dashboard/dashCategory">
                          <i>
                            <RiGridLine />
                          </i>
                          Add Category
                          <div className={styles.right_icon_2}>
                            <i>
                              <BiRightArrow />
                            </i>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li
                  className={`${styles.multimenu_item} ${
                    isNewsVisible ? styles.active : ""
                  }`}
                >
                  <div className={styles.subdrop} onClick={toggleNews}>
                    <i>
                      <RiNewspaperLine />
                    </i>
                    News
                    <div className={styles.right_icon}>
                      {isNewsVisible ? <BiDownArrow /> : <BiRightArrow />}
                    </div>
                  </div>
                  {isNewsVisible && (
                    <ul>
                      <li className={styles.list_item}>
                        <Link href="/dashboard/allnews">
                          <i>
                            <RiNewspaperLine />
                          </i>
                          All News
                          <div className={styles.right_icon_2}>
                            <i>
                              <BiRightArrow />
                            </i>
                          </div>
                        </Link>
                      </li>
                      <li className={styles.list_item}>
                        <Link href="/dashboard/postnews">
                          <i>
                            <RiNewspaperLine />
                          </i>
                          Add News
                          <div className={styles.right_icon_2}>
                            <i>
                              <BiRightArrow />
                            </i>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashSidebar;
