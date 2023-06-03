"use client"

import React from "react"
import Link from "next/link"
import {
  CommonBannerRecord,
  CommonBlockFragment,
} from "@/src/libs/graphql/generated"
import { Image } from "react-datocms/image"

const CommonBanner = ({ hasHeading, title, links }: CommonBlockFragment) => {
  return (
    <section className="flex flex-col items-center bg-muted px-8  py-4 sm:px-16 md:px-24">
      {hasHeading && <h1>{title}</h1>}
      {links.length > 0 && (
        <div className="flex w-full items-center justify-center gap-8 sm:w-full md:w-4/5 lg:gap-16 2xl:w-3/5">
          {links.map((link) => (
            <div key={link.id} className="flex items-center justify-center">
              {link.logotype.responsiveImage && (
                <Link href={link.officialWebsite}>
                  <Image
                    className="saturate-0"
                    data={link.logotype.responsiveImage}
                    layout="responsive"
                  />
                </Link>
              )}
              {link.hasHeading && (
                <h2 className="hidden font-heading font-bold lg:text-3xl xl:block xl:text-4xl">
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
