import axios, { AxiosResponse } from "axios"

import { env } from "@/env.mjs"

/**
 *
 * @param user The TeamSnap user object
 * @returns The TeamSnap league object
 */
export const getAgeGroupsByLeague = async (
  league: any
): Promise<AxiosResponse<any, any>> => {
  /* Get Self Data */
  const ageGroups = league.links.find((link) => link.rel === "descendants")

  return await axios.get(ageGroups.href, {
    headers: {
      Authorization: `Bearer ${env.TEAMSNAP_AUTH_TOKEN}`,
    },
  })
}
