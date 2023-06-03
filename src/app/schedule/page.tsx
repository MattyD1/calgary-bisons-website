import { TeamsByAgeGroup } from "@/libs/team-snap/functions/teams"
import { TeamSnap } from "@/components/test-teamsnap"

export default async function Schedule() {
  // const teams = await getTeams("Canadian Pro Baseball Academy", "18U", "15U")
  const teams = await TeamsByAgeGroup(
    "Canadian Pro Baseball Academy",
    "18U",
    "15U"
  )

  return (
    <main>
      <TeamSnap ageGroups={teams} />
    </main>
  )
}
