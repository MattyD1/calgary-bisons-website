"use client"

import React from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import Calendar from "@/components/calendar"

import SelectTeams from "./selectTeams"

const Sidebar = (props: any) => {
  const queryClient = new QueryClient()

  return (
    <section className="flex flex-col gap-4 p-8 shadow-sm shadow-accent sm:flex-row md:flex-col">
      <QueryClientProvider client={queryClient}>
        <Calendar />
        <SelectTeams teams={props.teams} />
      </QueryClientProvider>
    </section>
  )
}

export default Sidebar
