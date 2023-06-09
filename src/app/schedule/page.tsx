import React from "react"
import { tw } from "@/src/libs/utils"

import { GetActiveTeams } from "@/libs/query/functions/teams"

import Content from "./content"
import EventList from "./event-list"
import Sidebar from "./sidebar"

const GameSchedule = async () => {
  const teams = await GetActiveTeams(
    // Organization
    "Canadian Pro Baseball Academy",
    // Age Groups
    "18U",
    "15U",
    "13U",
    "11U"
  )

  return (
    <main>
      <section className={tw("m-auto flex w-full flex-col gap-8 px-8 py-32")}>
        <div>
          <h1 className="font-heading text-4xl font-black">Schedule</h1>
        </div>
        <div className={tw("m-auto w-full", "flex gap-10")}>
          <Sidebar teams={teams} />
          <Content />
        </div>
      </section>
    </main>
  )
}

export default GameSchedule
