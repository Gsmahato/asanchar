import React, { useState } from "react";
import styles from "@/styles/Admin.module.css";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    try {
      const response = await fetch(
        "https://www.bimaabazar.com/newsportal/login/",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      if (data.success) {
        toast.success("Login successful", {
          position: toast.POSITION.TOP_CENTER,
        });
        router.push("/dashboard");
      } else if (response.status === 403) {
        console.log("Unauthorized");
        toast.error("Forbidden: Access Denied", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        console.log("An error occurred");
        toast.error("Login failed", {
          position: toast.POSITION.TOP_CENTER,
        });
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
              <form
                // action="/admin/login/?next=/admin/"
                // method="post"
                // id="login-form"
                component="form"
                onSubmit={handleSubmit}
                noValidate
              >
                <input
                  type="hidden"
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <div className={styles.form_row}>
                  <label htmlFor="id_username" className="required">
                    Username:
                  </label>
                  <input
                    type="text"
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className={styles.form_row}>
                  <label htmlFor="id_password" className="required">
                    Password:
                  </label>
                  <input
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
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
