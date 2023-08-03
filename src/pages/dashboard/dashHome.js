import React from 'react'
import DashboardLayout from '../../../components/components/DashboardLayout'
import styles from "@/styles/Admin.module.css"

const dashHome = () => {
  return (
    <DashboardLayout>
    <div className={styles.dashcontenthome}>Welcome! To Admin DashBoard!</div>
    </DashboardLayout>
  )
}

export default dashHome