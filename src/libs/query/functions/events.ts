import { useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

import { env } from "@/env.mjs"

interface IEvents {
  teamId: number[]
  dates?: {
    start: string
    end: string
  }
}

const fetchEvents = async ({ teamId, dates }: IEvents) => {
  console.log(
    `https://api.teamsnap.com/v3/events/search?team_id=${teamId[0]}&started_after=${dates?.start}&started_before=${dates?.end}&sort=start_date`
  )
  const response = await Promise.all(
    teamId.map(async (id) => {
      const data = await axios.get(
        `https://api.teamsnap.com/v3/events/search?team_id=${id}&started_after=${dates?.start}&started_before=${dates?.end}&sort=start_date`,
        {
          headers: {
            Authorization: `Bearer ${env.NEXT_PUBLIC_TEAMSNAP_AUTH_TOKEN}`,
          },
        }
      )

      return data.data.collection.items
    })
  )

  return response.flat()
}

const useEvents = ({ teamId, dates }: IEvents) => {
  return useQuery(["events", teamId, dates], () =>
    fetchEvents({ teamId, dates })
  )
}

export { useEvents }
