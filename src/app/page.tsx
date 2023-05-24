import Image from "next/image"
import { HomeDocument, HomeQuery } from "@/src/libs/graphql/generated"
import { request } from "@/src/libs/request"
import { renderMetaTags } from "react-datocms/seo"

import { Button } from "@/components/common/button"
import { HeroImage } from "@/components/banners/hero-image"

export default async function Home() {
  const result: HomeQuery = await request(HomeDocument)

  const landingpage = result.allLandingPages[0]

  return (
    <main>
      {renderMetaTags(landingpage._seoMetaTags)}
      {/* @ts-expect-error */}
      <HeroImage {...landingpage.heroBanner} />
      <div className="z-10 w-full max-w-5xl items-center justify-between font-sans text-sm lg:flex"></div>
    </main>
  )
}
