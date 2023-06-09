import axios, { AxiosResponse } from "axios"

import { env } from "@/env.mjs"

/**
 *
 * @param user The TeamSnap user object
 * @returns The TeamSnap league object
 */
export const getTeamsByAges = async (
  ageGroups: any
): Promise<AxiosResponse<any, any>> => {
  /* Get Self Data */
  const teams = ageGroups.links.find((link) => link.rel === "active_teams")

  return await axios.get(teams.href, {
    headers: {
      Authorization: `Bearer ${env.NEXT_PUBLIC_TEAMSNAP_AUTH_TOKEN}`,
    },
  })
}
