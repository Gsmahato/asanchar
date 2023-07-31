import React from 'react'
import DashboardLayout from '../../components/components/DashboardLayout'
import Link from 'next/link'

const dashboard = () => {
  return (
    <DashboardLayout>
    <Link href="/dashboard/setting">setting</Link>
    </DashboardLayout>
  )
}

export default dashboard