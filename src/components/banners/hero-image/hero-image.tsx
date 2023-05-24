import React from "react"
import clsx from "clsx"
import { Image } from "react-datocms/image"

import {
  ButtonRecord,
  HeroImageModelHeadingField,
  HeroImageModelParagraphField,
  ImageAltTitleFileField,
  Maybe,
} from "@/libs/graphql/generated"
import { Heading } from "@/components/common/structured-heading"
import { Paragraph } from "@/components/common/structured-paragraph"

import { Button } from "../../common/button"
import { CommonBanner } from "../../sections"

interface IBannerProps {
  highlight?: { bg: string; text: string; before: string }
  overlay?: string
  heading: HeroImageModelHeadingField
  body?: Maybe<HeroImageModelParagraphField>
  image: ImageAltTitleFileField
  buttons: ButtonRecord[]
  lowerBanner: any
}

const HeroImage = ({
  highlight,
  overlay,
  heading,
  body,
  image,
  buttons,
  lowerBanner,
}: IBannerProps) => {
  console.log(overlay)
  return (
    <section>
      <div className="relative min-h-2/3 w-full">
        {/* Banner Image */}
        <div className="absolute h-full w-full">
          {/* Image */}
          <Image data={image.responsiveImage} layout="fill" objectFit="cover" />

          {/* Overlay */}
          {overlay && (
            <div
              className={clsx("absolute h-full w-full opacity-70", overlay)}
            />
          )}
        </div>

        {/* Banner Content */}
        <div className="absolute mx-32 flex h-full flex-col justify-center gap-5 pt-12 text-primary-foreground">
          {/* Title */}
          <Heading
            heading={heading}
            highlightColor={highlight}
            className={clsx("max-w-[16ch] font-heading text-5xl font-black")}
          />

          {/* Description */}
          <Paragraph
            body={body}
            highlightColor={highlight}
            className={clsx(
              "max-w-[55ch] font-sans text-lg font-medium text-primary-foreground"
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
      {lowerBanner && <CommonBanner {...lowerBanner} />}
    </section>
  )
}

export { HeroImage }
