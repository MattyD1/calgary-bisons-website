import { env } from "@/env.mjs"

export function TeamSnap(ageGroups: any) {
  console.log(ageGroups)
  const token = env.NEXT_PUBLIC_TEAMSNAP_AUTH_TOKEN
  console.log(token)

  // const test = LinkFilter(
  //   ageGroups.ageGroups[0].links,
  //   "assignments",
  //   "team_fees"
  // )

  // console.log(test)
  return (
    <div className="fixed bottom-1 right-1 z-50 flex gap-1 rounded-full text-xs"></div>
  )
}
