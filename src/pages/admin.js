import React, { useState } from "react";
import styles from "@/styles/Admin.module.css";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const result = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });
      
      if (result.error) {
        console.error("Login failed");
        toast.error("Login failed", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        toast.success("Login successful", {
          position: toast.POSITION.TOP_CENTER,
        });
        router.push("/dashboard/dashHome");
      }
    } catch (error) {
      console.log(error);
      toast.error("Login failed", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };



  return (
    <div className={styles.admin_container}>
      <div className={styles.header}>
        <div className={styles.branding}>
          <h1 className={styles.site_name}>
            <Link href="/admin">Login</Link>
          </h1>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.colM}>
            <div className={styles.content_main}>
              <form component="form" onSubmit={handleSubmit} noValidate>
                <div className={styles.form_row}>
                  <label htmlFor="id_username" className="required">
                    Username:
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className={styles.form_row}>
                  <label htmlFor="id_password" className="required">
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input type="hidden" name="next" value="/admin" />
                </div>
                <div className={styles.submit_row}>
                  <input type="submit" value="Log in" />
                </div>
              </form>
              <ToastContainer />
            </div>
            <br className="clear" />
          </div>
          <div id="footer"></div>
        </div>
      </div>
    </div>
  );
};

export default admin;
