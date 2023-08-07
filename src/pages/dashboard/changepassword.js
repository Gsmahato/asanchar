import React from 'react'
import DashboardLayout from '../../../components/components/DashboardLayout'
import styles from "@/styles/Admin.module.css"

const changepassword = () => {
  return (
    <DashboardLayout>
     <div className={styles.app_main_outer}>
        <div className={styles.app_main_inner}>
          <div className={styles.row}>
            <div className={styles.main_content}>
              <div className={styles.main_content_bar}>&nbsp;</div>
              <span className={styles.main_content_title}>Password</span>
              <div>
                <div className={styles.write_content}>
                  <h4>Change Password</h4>
                  <form className={styles.news_form}>
                    <ul>
                      <li>
                        <div className={styles.row}>
                          <div className={styles.content_col}>
                            <div className={styles.content_col_form_group}>
                              <input
                                type="text"
                                name="old_password"
                                required
                                placeholder="Old Password *"
                                value=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.row}>
                          <div className={styles.content_col}>
                            <div className={styles.content_col_form_group}>
                              <input
                                type="text"
                                name="new_password"
                                required
                                placeholder="New Password *"
                                value=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.row}>
                          <div className={styles.content_col}>
                            <div className={styles.content_col_form_group}>
                              <input
                                type="text"
                                name="new_password_c"
                                required
                                placeholder="New Password Confirmation*"
                                value=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.row}>
                          <div className={styles.content_col}>
                            <button
                              type="submit"
                              className={styles.content_submit_btn}
                            >
                              Change My Password
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </form>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default changepassword