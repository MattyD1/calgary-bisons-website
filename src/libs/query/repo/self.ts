import axios, { AxiosResponse } from "axios"

import { env } from "@/env.mjs"

/**
 * This takes no parameters because it is assumed that there is only one User
 *
 * @returns The TeamSnap self object
 */
export const getSelf = async (): Promise<AxiosResponse<any, any>> => {
  /* Get Self Data */
  return await axios.get(`https://api.teamsnap.com/v3/me`, {
    headers: {
      Authorization: `Bearer ${env.NEXT_PUBLIC_TEAMSNAP_AUTH_TOKEN}`,
    },
  })
}
