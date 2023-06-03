"use client"

import React from "react"
import { VideoField, VideoRecord } from "@/src/libs/graphql/generated"
import { tw } from "@/src/libs/utils"
import { Loader, Loader2 } from "lucide-react"

import { AspectRatio } from "../common/aspect-ratio"
import { Skeleton } from "../common/skeleton"

interface IVideoProps extends VideoRecord {
  shaded: boolean
}

const Video = ({ shaded, isExternal, externalVideo }: IVideoProps) => {
  console.log(externalVideo)
  return (
    <section
      className={tw(
        "pb-16 md:pb-24",
        shaded
          ? "bg-secondary text-secondary-foreground"
          : "bg-transparent text-foreground"
      )}
    >
      {/* TOOD: Actually add video */}

      <div className="m-auto w-full rounded-lg px-4 md:w-4/5 md:px-0">
        <AspectRatio ratio={16 / 9}>
          {externalVideo && <ExternalVideo {...externalVideo} />}
        </AspectRatio>
      </div>
    </section>
  )
}

const ExternalVideo = ({ providerUid, title }: VideoField) => {
  return (
    <div className="h-full w-full overflow-hidden rounded-lg">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube.com/embed/${providerUid}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        allowFullScreen
        title={title}
      />
    </div>
  )
}

export { Video }
