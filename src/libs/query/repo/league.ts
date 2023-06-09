import axios, { AxiosResponse } from "axios"

import { env } from "@/env.mjs"

/**
 *
 * @param user The TeamSnap user object
 * @returns The TeamSnap league object
 */
export const getLeagueByUser = async (
  user: any
): Promise<AxiosResponse<any, any>> => {
  /* Get Self Data */
  const leaguesObject = user.collection.items[0].links.find(
    (link) => link.rel === "divisions"
  )

  return await axios.get(leaguesObject.href, {
    headers: {
      Authorization: `Bearer ${env.NEXT_PUBLIC_TEAMSNAP_AUTH_TOKEN}`,
    },
  })
}
