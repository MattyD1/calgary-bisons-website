"use client"

import React from "react"
import clsx from "clsx"
import { Image } from "react-datocms/image"

import { HeroImageFragment } from "@/libs/graphql/generated"
import { getHighlightColor, getOverlay, tw } from "@/libs/utils"
import { Heading } from "@/components/common/structured-heading"
import { Paragraph } from "@/components/common/structured-paragraph"

import { CommonBanner } from "../sections"

const HeroImage = ({
  highlightColor,
  hasOverlay,
  overlayColor,
  image,
  heading,
  paragraph,
  showcaseBanner,
}: HeroImageFragment) => {
  const highlight = highlightColor
    ? getHighlightColor(highlightColor)
    : undefined

  const overlay =
    hasOverlay && overlayColor ? getOverlay(overlayColor) : undefined

  console.log(image)
  return (
    <section>
      <div className="relative min-h-2/3 w-full">
        {/* Banner Image */}
        <div className="absolute h-full w-full">
          {/* Image */}
          <Image
            className="saturate-0"
            data={image.responsiveImage}
            layout="fill"
            objectFit="cover"
          />

          {/* Overlay */}
          {overlay && (
            <div
              className={clsx("absolute h-full w-full opacity-70", overlay)}
            />
          )}
        </div>

        {/* Banner Content */}
        <div
          className={tw(
            "absolute  flex h-full flex-col justify-center gap-5 pt-12 text-primary-foreground ",
            "mx-8 sm:mx-16 md:mx-32 md:items-start"
          )}
        >
          {/* Title */}
          <Heading
            heading={heading}
            highlightColor={highlight}
            className={clsx(
              "max-w-[16ch] font-heading font-black",
              "text-3xl sm:text-4xl lg:text-5xl"
            )}
          />

          {/* Description */}
          <Paragraph
            body={paragraph}
            highlightColor={highlight}
            className={clsx(
              "max-w-[55ch] font-sans font-medium text-primary-foreground",
              "text-sm sm:text-base md:text-lg"
            )}
          />

          {/* Button */}
          {/* TODO: Add button */}
          {/* {buttons.length != 0 && (
          <div className="flex gap-4">
            {buttons.map((button) => (
              <Button {...button} />
            ))}
          </div>
        )} */}
        </div>
      </div>
      {/* Lower Banner */}
      {showcaseBanner && <CommonBanner {...showcaseBanner} />}
    </section>
  )
}

export { HeroImage }
