import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    NEXT_DATOCMS_API_TOKEN: z.string(),
    TEAMSNAP_AUTH_TOKEN: z.string(),
    TEAMSNAP_USERID: z.string(),
  },
  client: {},
  runtimeEnv: {
    NEXT_DATOCMS_API_TOKEN: process.env.NEXT_DATOCMS_API_TOKEN,
    TEAMSNAP_AUTH_TOKEN: process.env.TEAMSNAP_AUTH_TOKEN,
    TEAMSNAP_USERID: process.env.TEAMSNAP_USERID,
  },
})
