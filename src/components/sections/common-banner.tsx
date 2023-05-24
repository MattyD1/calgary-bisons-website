"use client"

import React from "react"
import Link from "next/link"
import { CommonBannerRecord } from "@/src/libs/graphql/generated"
import { Image } from "react-datocms/image"

const IBannerProps = {}

const CommonBanner = (banner: CommonBannerRecord) => {
  console.log(banner)
  return (
    <section className="flex flex-col items-center bg-muted px-24 py-4">
      {banner.hasHeading && <h1>{banner.title}</h1>}
      {banner.links.length > 0 && (
        <div className="flex w-4/5 items-center justify-center gap-16">
          {banner.links.map((link) => (
            <div className="flex items-center justify-center">
              {link.logotype.responsiveImage && (
                <Link href={link.officialWebsite}>
                  <Image
                    data={link.logotype.responsiveImage}
                    layout="responsive"
                  />
                </Link>
              )}
              {link.hasHeading && (
                <h2 className="font-heading text-4xl font-bold">
                  {link.title}
                </h2>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export { CommonBanner }
