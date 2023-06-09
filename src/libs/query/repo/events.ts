import axios, { AxiosResponse } from "axios"

import { env } from "@/env.mjs"

/**
 *
 * @param user The TeamSnap user object
 * @returns The TeamSnap league object
 */
export const getEventsByTeam = async (
  team,
  onlyGames,
  toDate,
  fromDate
): Promise<AxiosResponse<any, any>> => {
  /* Get Self Data */
  const events = team.links.find((link) => link.rel === "events")
  const linkParms = `${events.href}${onlyGames ? "&is_game=true" : ""}`
  console.log(linkParms)

  // TODO: env is not working, had to use process.env
  return await axios.get(`${linkParms}`, {
    headers: {
      Authorization: `Bearer ${env.NEXT_PUBLIC_TEAMSNAP_AUTH_TOKEN}`,
    },
  })
}
