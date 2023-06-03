"use client"

import React from "react"

import { DesktopNav } from "./desktop-nav"
import MobileNav from "./mobile-nav"

export const MainNav = () => {
  return (
    <div className="">
      <DesktopNav />
      <MobileNav />
    </div>
  )
}
