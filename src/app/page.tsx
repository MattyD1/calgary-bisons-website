import Image from "next/image"
import { HomeDocument, HomeQuery } from "@/src/libs/graphql/generated"
import { request } from "@/src/libs/request"
import { renderMetaTags } from "react-datocms/seo"

import { Button } from "@/components/common/button"

export default async function Home() {
  // const result: HomeQuery = await request(HomeDocument)

  // const landingpage = result.allLandingPages[0]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* {renderMetaTags(landingpage._seoMetaTags)} */}
      <div className="z-10 w-full max-w-5xl items-center justify-between font-sans text-sm lg:flex"></div>
    </main>
  )
}
