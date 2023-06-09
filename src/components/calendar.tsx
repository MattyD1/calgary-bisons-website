"use client"

import React, { useEffect, useState } from "react"
import {
  add,
  format,
  getDay,
  isSameDay,
  parse,
  parseISO,
  startOfToday,
} from "date-fns"
import { eachDayOfInterval, endOfMonth } from "date-fns/esm"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { useEvents } from "../libs/query/functions/events"
import { useScheduleStore } from "../libs/stores"
import { tw } from "../libs/utils"

const Calendar = () => {
  const setDates = useScheduleStore((state) => state.setDates)
  const dates = useScheduleStore((state) => state.dates)
  const [selectedDay, setSelectedDay] = useScheduleStore((state) => [
    state.selectedDate,
    state.setSelectedDate,
  ])
  const selectedTeams = useScheduleStore((state) => state.teams)

  let today = startOfToday()
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"))
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date())

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  })

  const previousMonth = () => {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"))
    setDates({
      start: format(firstDayNextMonth, "yyyy-MM-dd"),
      end: format(endOfMonth(firstDayNextMonth), "yyyy-MM-dd"),
    })
  }

  const nextMonth = () => {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"))
    setDates({
      start: format(firstDayNextMonth, "yyyy-MM-dd"),
      end: format(endOfMonth(firstDayNextMonth), "yyyy-MM-dd"),
    })
  }

  useEffect(() => {
    setDates({
      start: format(firstDayCurrentMonth, "yyyy-MM-dd"),
      end: format(endOfMonth(firstDayCurrentMonth), "yyyy-MM-dd"),
    })
  }, [])

  const { data, isLoading, isFetching } = useEvents({
    teamId: selectedTeams.map((team: any) => team.id),
    dates: dates,
  })

  return (
    <div>
      <div className="flex items-center justify-between py-4">
        <h2 className="font-heading text-lg font-semibold lg:text-xl">
          {format(firstDayCurrentMonth, "MMMM yyyy")}
        </h2>
        <div className="flex">
          <button
            onClick={previousMonth}
            className="rounded-sm p-2 duration-200 hover:bg-muted"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={nextMonth}
            className="rounded-sm p-2 duration-200 hover:bg-muted"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
      <div>
        <div
          className={tw(
            "mb-2 grid  gap-1  lg:gap-2",
            "grid-cols-[repeat(7,_minmax(40px,_40px))] sm:grid-cols-[repeat(7,_minmax(32px,_32px))] md:grid-cols-[repeat(7,_minmax(36px,_36px))] lg:grid-cols-[repeat(7,_minmax(40px,_40px))]"
          )}
        >
          {["SU", "MO", "TU", "WE", "TH", "FR", "SA"].map((day, index) => (
            <div
              key={index}
              className="text-center text-xs font-semibold text-muted-foreground/60 lg:text-sm"
            >
              {day}
            </div>
          ))}
        </div>
        <div
          className={tw(
            "grid gap-1 lg:gap-2",
            "grid-cols-[repeat(7,_minmax(40px,_40px))] sm:grid-cols-[repeat(7,_minmax(32px,_32px))] md:grid-cols-[repeat(7,_minmax(36px,_36px))] lg:grid-cols-[repeat(7,_minmax(40px,_40px))]"
          )}
        >
          {days.map((day, index) => (
            <div
              key={index}
              className={tw(
                "flex items-center justify-center text-center",
                index == 0 && getStartColumn(day)
              )}
              onClick={() => setSelectedDay(day)}
            >
              <button
                className={tw(
                  "flex flex-col items-center justify-center rounded-sm text-sm font-medium duration-200 lg:text-base",
                  "h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10",
                  isSameDay(selectedDay, day)
                    ? "bg-accent text-background hover:bg-accent/70"
                    : "hover:bg-muted"
                )}
              >
                {format(day, "d")}
                {isLoading ? (
                  <div>
                    <div className={tw("h-1 w-1 rounded-full bg-muted")} />
                  </div>
                ) : (
                  <>
                    {data?.some((event) => {
                      // event.data.find((data) => data.name === "start_date")
                      return isSameDay(parseISO(event?.data[32]?.value), day)
                    }) && (
                      <div
                        className={tw(
                          "h-1 w-1 rounded-full bg-accent",
                          isSameDay(selectedDay, day)
                            ? "bg-background"
                            : "bg-accent"
                        )}
                      />
                    )}
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const getStartColumn = (day: Date) => {
  const index = getDay(day)
  switch (index) {
    case 0:
      return "col-start-1"
    case 1:
      return "col-start-2"
    case 2:
      return "col-start-3"
    case 3:
      return "col-start-4"
    case 4:
      return "col-start-5"
    case 5:
      return "col-start-6"
    case 6:
      return "col-start-7"
  }
}

export default Calendar
