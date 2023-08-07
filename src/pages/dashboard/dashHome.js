import React, { useEffect } from "react";
import DashboardLayout from "../../../components/components/DashboardLayout";
import styles from "@/styles/Admin.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const DashHome = () => {
  const { data: session } = useSession();
  console.log(session.user)
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/admin");
    }
  }, [session, router]);

  if (!session) {
    return null;
  }

  return (
    <DashboardLayout>
      <div className={styles.dashcontenthome}>Welcome! To Admin DashBoard!</div>
    </DashboardLayout>
  );
};

export default DashHome;
