"use client"

import React from "react"
import {
  CoachRecord,
  ImagesWithGalleryRecord,
  ImagesWithTextRecord,
} from "@/src/libs/graphql/generated"
import { getHighlightColor, tw } from "@/src/libs/utils"
import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import useEmblaCarousel from "embla-carousel-react"
import { Image } from "react-datocms/image"

import ImageText from "../common/image-text"
import { Heading } from "../common/structured-heading"
import { Paragraph } from "../common/structured-paragraph"

interface IImagesWithTextProps extends ImagesWithGalleryRecord {
  shaded: boolean
}

const GalleryWithText = ({
  shaded,
  hasKicker,
  heading,
  highlightColor,
  kicker,
  text,
  isLink,
  galleryLink,
}: IImagesWithTextProps) => {
  const highlight = highlightColor
    ? getHighlightColor(highlightColor)
    : undefined

  console.log(galleryLink)

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
          "m-auto flex w-full flex-col gap-8 px-6 py-16 md:py-24",
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

        {/* Gallery */}
        <div>
          {!isLink && (
            // <div>
            //   {galleryLink.map((link) => (
            //     <div key={link.id}>{link.name}</div>
            //   ))}
            // </div>
            <EmblaCarousel links={galleryLink} />
          )}
        </div>
      </div>
    </section>
  )
}

// TODO: Add a couple good options
const EmblaCarousel = ({ links }: any) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true })

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {links.map((link: CoachRecord) => (
          <div className="flex min-w-0 flex-[0_0_50%] flex-col gap-4 p-4 sm:flex-[0_0_25%]">
            <div className="rounded-sm bg-muted">
              <AspectRatio ratio={4 / 5}>
                <Image
                  data={link.image.responsiveImage}
                  className="opacity-10 contrast-75 saturate-0"
                />
              </AspectRatio>
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground md:text-sm">
                {link.organizationalRole}
              </p>
              <h1 className="font-heading text-lg font-medium md:text-xl">
                {link.name}
              </h1>
              {link.coachingRole.map((role, index) => (
                <div className="font-heading text-sm md:text-base">
                  {role} {index < link.coachingRole.length - 1 && " | "}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { GalleryWithText }
