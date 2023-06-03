import React from "react"
import {
  ImageTextRecord,
  ImageWithTextRecord,
} from "@/src/libs/graphql/generated"
import { getHighlightColor, tw } from "@/src/libs/utils"
import { Image } from "react-datocms/image"

import { AspectRatio } from "../common/aspect-ratio"
import ImageText from "../common/image-text"
import { Heading } from "../common/structured-heading"
import { Paragraph } from "../common/structured-paragraph"

interface IImageWithTextProps extends ImageTextRecord {
  shaded: boolean
}

const ImageWithText = ({
  shaded,
  hasKicker,
  kicker,
  heading,
  highlightColor,
  text,
  image,
}: IImageWithTextProps) => {
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
          "m-auto w-full px-6 py-16 md:py-24",
          "lg:max-w-5xl lg:px-0",
          "grid grid-cols-1",
          "gap-10 md:grid-cols-[0.8fr_1fr] lg:grid-cols-[0.8fr_1fr]"
        )}
      >
        {/* Text */}
        <div className={tw("order-2 flex flex-col gap-8 md:-order-last")}>
          {/* Title */}
          <div>
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
                "font-heading text-2xl font-black",
                "sm:text-3xl lg:text-4xl",
                shaded
                  ? "bg-secondary text-secondary-foreground"
                  : "bg-transparent text-foreground"
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

        {/* Image */}
        <AspectRatio
          ratio={4 / 5}
          className="flex-1 overflow-hidden rounded-sm"
        >
          <Image
            className="brightness-75 saturate-0"
            data={image.responsiveImage}
            layout="fill"
            objectFit="cover"
            // style={{ filter: "brightness(80%)" }}
          />
        </AspectRatio>
      </div>
    </section>
  )
}

export { ImageWithText }
