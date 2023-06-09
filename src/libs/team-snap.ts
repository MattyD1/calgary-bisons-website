// import { env } from "@/env.mjs"
// import { AgeGroups } from "@/types"

// const getTeamSnap = async (teamId: string) => {
//   const response = await fetch(`https://api.teamsnap.com/v3/teams/${teamId}`, {
//     headers: {
//       Authorization: `Bearer ${env.NEXT_PUBLIC_TEAMSNAP_AUTH_TOKEN}`,
//     },
//   })
//   const json = await response.json()
//   return json
// }

// /**
//  *
//  * @param organizationName The name of the organization you would like to fetch
//  * @returns The TeamSnap organization object
//  */
// export const getSelf = async (organizationName: string): Promise<JSON> => {
//   /* Get Self Data */
//   const response = await fetch(`https://api.teamsnap.com/v3/me`, {
//     headers: {
//       Authorization: `Bearer ${env.NEXT_PUBLIC_TEAMSNAP_AUTH_TOKEN}`,
//     },
//   })
//   const json = await response.json()

//   return json
// }

// export const getLeagueByName = async (user: any) => {
//   const leaguesObject = user.collection.items[0].links.find(
//     (link) => link.rel === "divisions"
//   )

//   const response = await fetch(leaguesObject.href, {
//     headers: {
//       Authorization: `Bearer ${env.NEXT_PUBLIC_TEAMSNAP_AUTH_TOKEN}`,
//     },
//   })

//   const json = await response.json()
//   return json
// }

// export const getLeagueAgeGroupsByName = async (league: any) => {
//   const divisionsObject = league.collection.items[0].links.find(
//     (link) => link.rel === "descendants"
//   )

//   const response = await fetch(divisionsObject.href, {
//     headers: {
//       Authorization: `Bearer ${env.NEXT_PUBLIC_TEAMSNAP_AUTH_TOKEN}`,
//     },
//   })

//   const json = await response.json()
//   return json
// }

// const LinkFind = (links: any, rel: string) => {
//   const object = links.find((link) => link.rel === rel)

//   return object
// }

// export const LinkFilter = (links: any, ...rel: string[]) => {
//   const objects = links.filter((link) => rel.includes(link.rel))

//   return objects
// }

// export const getTeams = async (organization: string, ...ages: AgeGroups[]) => {
//   const ageGroups = await getAgeGroups(organization, ...ages)

//   if (!ageGroups) return null

//   const teams = await Promise.all(
//     ageGroups.map(async (ageGroup) => {
//       const teams = LinkFind(ageGroup.links, "active_teams")

//       const teamsResponse = await fetch(teams.href, {
//         headers: {
//           Authorization: `Bearer ${env.NEXT_PUBLIC_TEAMSNAP_AUTH_TOKEN}`,
//         },
//       })

//       const teamsJson = await teamsResponse.json()

//       return teamsJson.collection.items
//     })
//   )

//   return teams.flat()
// }

// export const getAgeGroups = async (
//   organization: string,
//   ...ages: AgeGroups[]
// ) => {
//   const self = await getSelf()

//   /* Get Organizations */
//   const orgs = LinkFind(self.collection.items[0].links, "divisions")

//   const orgsResponse = await fetch(orgs.href, {
//     headers: {
//       Authorization: `Bearer ${env.NEXT_PUBLIC_TEAMSNAP_AUTH_TOKEN}`,
//     },
//   })

//   const orgsJson = await orgsResponse.json()

//   const org = orgsJson.collection.items.find((item) =>
//     item.data.find(
//       (data) => data.name === "name" && data.value.trim() === organization
//     )
//   )

//   if (!org) return null

//   /* Get Age Groups */
//   const descendants = LinkFind(org.links, "descendants")

//   const descendantsResponse = await fetch(descendants.href, {
//     headers: {
//       Authorization: `Bearer ${env.NEXT_PUBLIC_TEAMSNAP_AUTH_TOKEN}`,
//     },
//   })

//   const descendantsJson = await descendantsResponse.json()

//   const ageGroups = descendantsJson.collection.items.filter((item) => {
//     const age = item.data.find((data) => data.name === "name")
//     return ages.includes(age.value)
//   })

//   //   const org = orgsJson.collection.items.find((item) => item.data[0].value === organization)

//   return ageGroups
// }
