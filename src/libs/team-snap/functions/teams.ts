import axios from "axios"

import { HandleAxiosError, HandleInternalError } from "../../error"
import { getAgeGroupsByLeague } from "../repo/age-groups"
import { getLeagueByUser } from "../repo/league"
import { getSelf } from "../repo/self"
import { getTeamsByAges } from "../repo/teams"

const GetSelf = async (): Promise<any | void> => {
  let self
  try {
    const response = await getSelf()
    self = await response.data
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return HandleAxiosError(err)
    }

    return HandleInternalError(err, "Get Self Error")
  }

  return self
}

const GetLeague = async (user: any): Promise<any | void> => {
  let league
  try {
    const response = await getLeagueByUser(user)
    league = await response.data
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return HandleAxiosError(err)
    }

    return HandleInternalError(err, "Get League Error")
  }

  return league
}

const GetAgeGroup = async (league: any): Promise<any | void> => {
  let ageGroup
  try {
    const response = await getAgeGroupsByLeague(league)
    ageGroup = await response.data
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return HandleAxiosError(err)
    }

    return HandleInternalError(err, "Get Age Group Error")
  }

  return ageGroup
}

const GetTeams = async (ageGroups: any): Promise<any | void> => {
  let teams
  try {
    // const response = await getAgeGroupsByLeague(ageGroups)
    const map = await Promise.all(
      ageGroups.map(async (ageGroup) => {
        const response = await getTeamsByAges(ageGroup)

        const json = await response.data

        return json.collection
      })
    )

    teams = map.flat()
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return HandleAxiosError(err)
    }

    return HandleInternalError(err, "Get Teams Error")
  }

  return teams
}

export const TeamsByAgeGroup = async (
  organization: string,
  ...ages: string[]
) => {
  const self = await GetSelf()
  if (!self) return

  const leagues = await GetLeague(self)
  if (!leagues) return

  const league = leagues.collection.items.find((item) =>
    item.data.find(
      (data) =>
        data.name === "name" &&
        data.value.trim().toLowerCase() === organization.trim().toLowerCase()
    )
  )

  if (!league) return HandleInternalError(new Error(), "League Not Found")

  const allAgeGroups = await GetAgeGroup(league)
  if (!allAgeGroups) return

  const ageGroups = allAgeGroups.collection.items.filter((item) => {
    const age = item.data.find((data) => data.name === "name")
    return ages.includes(age.value)
  })

  const teams = GetTeams(ageGroups)

  return teams
}
