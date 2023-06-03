"use client"

import React from "react"

import { HeroImage } from "../components/banners/hero-image"
import {
  CommonBanner,
  GalleryWithText,
  ImageWithText,
  ImagesWithText,
  Video,
} from "../components/sections"
import { SectionsFragment, ShadedFragment } from "./graphql/generated"

interface ISectionProps {
  section: SectionsFragment
  shaded: ShadedFragment[]
}

const getSection = ({ section, shaded }: ISectionProps) => {
  const { __typename, id, ...props } = section

  let Section

  switch (__typename) {
    case "ImagesWithTextRecord":
      Section = ImagesWithText
      break
    case "CommonBannerRecord":
      Section = CommonBanner
      break
    case "ImagesWithGalleryRecord":
      Section = GalleryWithText
      break
    case "ImageTextRecord":
      Section = ImageWithText
      break
    case "VideoRecord":
      Section = Video
      break
    default:
      console.log(__typename)
      Section = undefined
      break
  }

  const isShaded = shaded.some((shade) => shade.id === id)

  return Section ? <Section key={id} shaded={isShaded} {...props} /> : null
}

interface IBuildSectionsProps {
  shaded: ShadedFragment[]
  sections: SectionsFragment[]
}

const BuildSections = ({ shaded, sections }: IBuildSectionsProps) => {
  return (
    <div>
      {sections.map((section) =>
        getSection({ section: section, shaded: shaded })
      )}
    </div>
  )
}

export default BuildSections
