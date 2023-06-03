import { HomeDocument, HomeQuery } from "@/src/libs/graphql/generated"
import { request } from "@/src/libs/request"
import { renderMetaTags } from "react-datocms/seo"

import BuildSections from "@/libs/build-sections"
import { HeroImage } from "@/components/banners/hero-image"
import { MainNav } from "@/components/navigation/main-nav"

export default async function Home() {
  const result: HomeQuery = await request(HomeDocument)

  const landingpage = result.allLandingPages[0]

  return (
    <>
      <MainNav />

      <main>
        {renderMetaTags(landingpage._seoMetaTags)}
        <HeroImage {...landingpage.heroBanner} />
        <BuildSections sections={...landingpage.sections} shaded={...landingpage.shaded}/>
      </main>
    </>
  )
}
