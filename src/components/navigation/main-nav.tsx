"use client"

import React from "react"

import { DesktopNav } from "./desktop-nav"
import MobileNav from "./mobile-nav"

interface IMainNavProps {
  white?: boolean
}

export const MainNav = ({ white }: IMainNavProps) => {
  return (
    <div className="">
      <DesktopNav white={white} />
      <MobileNav />
    </div>
  )
}
