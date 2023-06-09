"use client"

import React from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { format } from "date-fns"

import { useScheduleStore } from "@/libs/stores"

import EventList from "./event-list"

const Content = () => {
  const queryClient = new QueryClient()

  const selectedDay = useScheduleStore((state) => state.selectedDate)

  return (
    <section className="w-full bg-muted p-4">
      <h2 className="mb-4 text-xl font-bold">
        {format(selectedDay, "MMMM do, yyyy")}
      </h2>
      <QueryClientProvider client={queryClient}>
        <EventList />
      </QueryClientProvider>
    </section>
  )
}

export default Content
