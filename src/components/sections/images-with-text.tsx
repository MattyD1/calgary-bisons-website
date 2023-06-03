"use client"

import React from "react"
import { ImagesWithTextRecord } from "@/src/libs/graphql/generated"
import { getHighlightColor, tw } from "@/src/libs/utils"

import ImageText from "../common/image-text"
import { Heading } from "../common/structured-heading"
import { Paragraph } from "../common/structured-paragraph"

interface IImagesWithTextProps extends ImagesWithTextRecord {
  shaded: boolean
}

const ImagesWithText = ({
  shaded,
  hasKicker,
  heading,
  highlightColor,
  imagesBlock,
  kicker,
  text,
}: IImagesWithTextProps) => {
  const highlight = highlightColor
    ? getHighlightColor(highlightColor)
    : undefined

  return (
    <section
      className={tw(
        shaded
          ? "bg-secondary text-secondary-foreground"
          : "bg-transparent text-foreground"
      )}
    >
      {/* Container */}
      <div
        className={tw(
          "m-auto flex w-full flex-col gap-8 px-6 py-24",
          "lg:max-w-5xl lg:px-0"
        )}
      >
        {/* Text */}
        <div
          className={tw(
            "grid grid-cols-1",
            "gap-4 md:grid-cols-[0.5fr_1fr] lg:grid-cols-[0.7fr_1fr]"
          )}
        >
          {/* Title */}
          <div className="flex-1">
            {/* Kicker */}
            {hasKicker && (
              <div
                className={tw(
                  "text-sm font-bold text-muted-foreground",
                  "md:text-base lg:text-lg"
                )}
              >
                {kicker}
              </div>
            )}
            {/* Heading */}
            <Heading
              heading={heading}
              highlightColor={highlight}
              className={tw(
                "prose font-heading text-2xl font-black",
                "sm:text-3xl lg:text-4xl",
                shaded ? "prose-invert bg-secondary" : "bg-transparent"
              )}
            />
          </div>
          {/* Paragraph */}
          <div className="">
            <Paragraph
              body={text}
              highlightColor={highlight}
              className={tw(
                "prose prose-sm md:prose-base",
                shaded ? "prose-invert bg-secondary" : "bg-transparent"
              )}
            />
          </div>
        </div>

        {/* Images */}
        <div className="flex flex-col gap-10 sm:flex-row sm:gap-6">
          {imagesBlock.map((image) => (
            <ImageText key={image.id} {...image} />
          ))}
        </div>
      </div>
    </section>
  )
}

export { ImagesWithText }
