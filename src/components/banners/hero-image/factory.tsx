"use client"

import React from "react"
import {
  HeroImageFragment,
  HeroImageRecord,
} from "@/src/libs/graphql/generated"

import { HeroImage } from "./hero-image"

const getOverlay = (color: { hex: string }) => {
  if (!color.hex) return "bg-pink-500"

  switch (color.hex) {
    case "#000000":
      return "bg-black"
    case "#FFFFFF":
      return "bg-white"
    case "#E86840":
      return "bg-accent"
    case "#090E43":
      return "bg-primary"
    default:
      return
  }
}

const getHighlightColor = (highlight: { hex: string }) => {
  if (!highlight.hex) return

  switch (highlight.hex) {
    case "#E86840":
      return {
        bg: "bg-accent",
        text: "text-accent",
        before: "before:bg-accent",
      }
    case "#090E43":
      return {
        bg: "bg-primary",
        text: "text-primary",
        before: "before:bg-primary",
      }
    default:
      return
  }
}

const Factory = (heroImage: HeroImageRecord) => {
  const highlight = heroImage.highlightColor
    ? getHighlightColor(heroImage.highlightColor)
    : undefined

  // Get Overlay Color
  const overlay =
    heroImage.hasOverlay && heroImage.overlayColor
      ? getOverlay(heroImage.overlayColor)
      : undefined

  console.log(heroImage)

  return (
    <HeroImage
      highlight={highlight}
      overlay={overlay}
      heading={heroImage.heading}
      body={heroImage.paragraph}
      image={heroImage.image}
      buttons={heroImage.buttons}
      lowerBanner={heroImage.showcaseBanner}
    />
  )
}

export { Factory }
