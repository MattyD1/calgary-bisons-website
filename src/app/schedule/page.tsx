import React from "react"
import { HeroImage } from "@/src/components/banners/hero-image"
import { renderMetaTags } from "react-datocms/seo"

import { ScheduleDocument, ScheduleQuery } from "@/libs/graphql/generated"
import { GetActiveTeams } from "@/libs/query/functions/teams"
import { request } from "@/libs/request"
import { tw } from "@/libs/utils"

import Content from "./content"
import EventList from "./event-list"
import Sidebar from "./sidebar"

async function GetTeams() {
  return await GetActiveTeams(
    // Organization
    "Canadian Pro Baseball Academy",
    // Age Groups
    "18U",
    "15U",
    "13U",
    "11U"
  )
}

async function GetPage() {
  const res: ScheduleQuery = await request(ScheduleDocument)

  return res.allSchedulePages[0]
}

const GameSchedule = async () => {
  const teamsData = GetTeams()
  const pageData = GetPage()

  const [teams, page] = await Promise.all([teamsData, pageData])

  return (
    <main>
      {renderMetaTags(page._seoMetaTags)}
      <HeroImage {...page.heroBanner} />
      <section className={tw("m-auto flex w-full flex-col gap-8")}>
        <div className={tw("flex flex-col md:flex-row ")}>
          <Sidebar teams={teams} />
          <Content />
        </div>
      </section>
    </main>
  )
}

export default GameSchedule
