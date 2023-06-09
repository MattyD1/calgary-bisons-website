import React from "react"

import { MainNav } from "@/components/navigation/main-nav"

interface IRootLayoutProps {
  children: React.ReactNode
}

const ScheduleLayout = ({ children }: IRootLayoutProps) => {
  return (
    <>
      <MainNav white />
      {children}
    </>
  )
}

export default ScheduleLayout
