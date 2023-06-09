"use client"

import React from "react"
import { add, format, parseISO, startOfDay } from "date-fns"
import { endOfDay } from "date-fns/esm"
import { Calendar, MapPinIcon, Swords } from "lucide-react"

import { useEvents } from "@/libs/query/functions/events"
import { useScheduleStore } from "@/libs/stores"
import { tw } from "@/libs/utils"

const EventList = () => {
  const selectedDay = useScheduleStore((state) => state.selectedDate)
  const selectedTeams = useScheduleStore((state) => state.teams)
  const nextSelectedDay = add(selectedDay, { days: 1 })

  const { data, isLoading, isFetching } = useEvents({
    teamId: selectedTeams.map((team: any) => team.id),
    dates: {
      start: format(startOfDay(selectedDay), "yyyy-MM-dd'T'07:00:00'Z'"),
      end: format(startOfDay(nextSelectedDay), "yyyy-MM-dd'T'-07:00:00'Z'"),
    },
  })

  if (data) {
    data.sort((a, b) => {
      const aTime = a.data.find((data) => data.name === "start_date")
      const bTime = b.data.find((data) => data.name === "start_date")

      return parseISO(aTime.value).getTime() - parseISO(bTime.value).getTime()
    })
  }

  return (
    <div className="flex flex-col gap-3">
      {data?.map((event, index) => {
        if (!event) return

        const idObject = event.data.find((data) => data.name === "team_id")
        const timeObject = event.data.find((data) => data.name === "start_date")
        const nameObject = event.data.find(
          (data) => data.name === "formatted_title_for_multi_team"
        )
        const opponentObject = event.data.find(
          (data) => data.name === "opponent_name"
        )

        const locationOject = event.data.find(
          (data) => data.name === "location_name"
        )
        const isGameObject = event.data.find((data) => data.name === "is_game")
        const isTBDObject = event.data.find((data) => data.name === "is_tbd")
        const isCanceledObject = event.data.find(
          (data) => data.name === "is_canceled"
        )

        const teamName = selectedTeams.find(
          (team: any) => team.id === idObject.value
        )?.name

        console.log(timeObject)

        return (
          <div
            key={index}
            className={tw(
              "relative mx-auto flex w-full max-w-5xl flex-col gap-2 rounded-md border-l-4 sm:flex-row sm:items-center sm:gap-0",
              isCanceledObject.value
                ? "striped border-foreground/25"
                : "border-background bg-background",
              isGameObject.value && "border-accent"
            )}
          >
            <div className="px-4 pt-4 font-heading text-2xl font-black sm:w-[10ch] sm:p-4 sm:text-right lg:text-3xl">
              {isTBDObject.value ? (
                <p>TBD</p>
              ) : (
                <h1>
                  {format(parseISO(timeObject.value), "h:mm")}{" "}
                  <span className="uppercase text-foreground/20">
                    {format(parseISO(timeObject.value), "bbb")}
                  </span>
                </h1>
              )}
            </div>
            <div className="hidden h-10 w-[2px] rounded bg-muted sm:block" />
            <div className="px-4 pb-4 text-sm sm:p-4 lg:text-base">
              <div className="flex items-center gap-2">
                {isGameObject.value ? (
                  <Swords
                    strokeWidth={2}
                    size={16}
                    className="text-muted-foreground"
                  />
                ) : (
                  <Calendar
                    strokeWidth={2}
                    size={16}
                    className="text-muted-foreground"
                  />
                )}
                {isGameObject.value ? (
                  <p>
                    {teamName}{" "}
                    <span
                      className={tw(
                        "font-extrabold",
                        isCanceledObject.value
                          ? "text-foreground/25"
                          : "text-accent"
                      )}
                    >
                      VS.
                    </span>{" "}
                    {opponentObject.value}
                  </p>
                ) : (
                  <p>{nameObject.value}</p>
                )}
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon
                  strokeWidth={2}
                  size={16}
                  className="text-muted-foreground"
                />
                <p>{locationOject.value}</p>
              </div>
            </div>
            {isCanceledObject.value && (
              <h1 className="pointer-events-none absolute left-0 top-0 flex h-full w-full items-center justify-center text-8xl font-bold uppercase text-primary/5">
                Cancelled
              </h1>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default EventList
