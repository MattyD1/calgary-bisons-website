import Calendar from "@/src/components/calendar"
import { tw } from "@/src/libs/utils"
import axios from "axios"

import { env } from "@/env.mjs"
import { TeamsByAgeGroup } from "@/libs/team-snap/functions/teams"
import { TeamSnap } from "@/components/test-teamsnap"

import GetTeams from "./getTeams"

const getData = async () => {
  const events = await axios.get(
    "https://api.teamsnap.com/v3/events/search?team_id=8495766",
    {
      headers: {
        Authorization: `Bearer ${env.TEAMSNAP_AUTH_TOKEN}`,
      },
    }
  )

  const raw = await events.data

  let data: any[] = []

  raw.collection.items.forEach((item: any, index: number) => {
    data[index] = {
      team: item.data[33].value,
      name: item.data[45].value,
      is_game: item.data[13].value,
      opponent_name: item.data[42].value,
      start_time: item.data[32].value,
      time_zone: item.data[37].value,
      location: item.data[43].value,
    }
  })

  return data
}

export default async function Schedule() {
  // const teams = await getTeams("Canadian Pro Baseball Academy", "18U", "15U")
  const teams = await TeamsByAgeGroup(
    "Canadian Pro Baseball Academy",
    "18U",
    "15U",
    "13U",
    "11U"
  )

  // /* Testing Data */
  const data = await getData()

  return (
    <main>
      <section className={tw("m-auto flex w-full flex-col gap-8 px-8 py-32")}>
        <div>
          <h1 className="font-heading text-4xl font-black">Schedule</h1>
        </div>
        <div className={tw("m-auto w-full", "flex gap-10")}>
          <section>
            <Calendar data={data} />
            <GetTeams teams={teams} />
          </section>
          <section className="h-96 w-full bg-primary"></section>
        </div>
      </section>
    </main>
  )
}
