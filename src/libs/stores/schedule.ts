import { startOfToday } from "date-fns"
import { StateCreator, create } from "zustand"

interface ISelectTeams {
  teams: {
    id: number
    name: string
  }[]
  allTeams: {
    id: number
    name: string
  }[]
  setAllTeams: (
    teams: {
      id: number
      name: string
    }[]
  ) => void
  addTeam: (team: { id: number; name: string }) => void
  removeTeam: (team: { id: number; name: string }) => void
  clearTeams: () => void
  selectAllTeams: () => void
  isSelected: (team: { id: number; name: string }) => boolean
}

interface ICalendar {
  selectedDate: Date
  dates?: {
    start: string
    end: string
  }
  setDates: (dates: { start: string; end: string }) => void
  setSelectedDate: (date: Date) => void
}

const createSelectTeamsSlice: StateCreator<
  ISelectTeams & ICalendar,
  [],
  [],
  ISelectTeams
> = (set, get) => ({
  teams: [],
  allTeams: [],
  setAllTeams: (teams) => set({ allTeams: teams }),
  addTeam: (team) =>
    set({
      teams: get().teams.includes(team) ? get().teams : [...get().teams, team],
    }),
  removeTeam: (team) =>
    set({
      teams: get().teams.filter((t) => t.id !== team.id),
    }),
  clearTeams: () => set({ teams: [] }),
  selectAllTeams: () => set({ teams: get().allTeams }),
  isSelected: (team) => get().teams.some((t) => t.id === team.id),
})

const createCalendarSlice: StateCreator<ICalendar> = (set) => ({
  dates: undefined,
  selectedDate: startOfToday(),
  setDates: (dates) => {
    set({ dates })
  },
  setSelectedDate: (date) => {
    set({ selectedDate: date })
  },
})

export const useScheduleStore = create<ISelectTeams & ICalendar>((...a) => ({
  ...createSelectTeamsSlice(...a),
  ...createCalendarSlice(...a),
}))
