"use client"

import React from "react"
import { ImageWithTextRecord } from "@/src/libs/graphql/generated"
import { getHighlightColor } from "@/src/libs/utils"
import { Image } from "react-datocms/image"

import { ImagesWithText } from "../sections"
import { AspectRatio } from "./aspect-ratio"
import { Paragraph } from "./structured-paragraph"

const ImageText = (props: ImageWithTextRecord) => {
  return (
    <div className="flex flex-col gap-4">
      {/* Image */}
      <div className="relative overflow-hidden rounded-sm">
        <AspectRatio ratio={3 / 2}>
          <Image className="saturate-0" data={props.image.responsiveImage} />
        </AspectRatio>
      </div>

      {/* Text */}
      {props.hasText && (
        <div className="flex flex-col gap-3">
          {props.heading && (
            <h2 className="font-heading text-xl font-bold lg:text-2xl">
              {props.heading}
            </h2>
          )}
          {props.text && (
            <Paragraph
              body={props.text}
              highlightColor={getHighlightColor()}
              className="prose prose-sm md:prose-base"
            />
          )}
        </div>
      )}
    </div>
  )
}

export default ImageText
