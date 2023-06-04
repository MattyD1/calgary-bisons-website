"use client"

import React from "react"
import { Checkbox } from "@/src/components/common/checkbox"
import {
  Calculator,
  CalendarIcon,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/common/command"

// TODO: Teams
const GetTeams = ({ teams }: any) => {
  console.log(teams)
  return (
    <div className="mt-4">
      {/* <h2 className="font-heading text-lg font-semibold lg:text-xl">Teams</h2> */}
      <Command className="">
        <CommandInput placeholder="Search for a team..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup className="mt-2">
            <CommandItem>
              <Checkbox className="mr-2 h-4 w-4" />
              <label>Select All</label>
            </CommandItem>
          </CommandGroup>

          {teams.map((age: any) => {
            const key = Object.keys(age)
            return (
              <CommandGroup heading={key[0]}>
                {age[key[0]].items.map((team: any) => {
                  const nameObject = team.data.find(
                    (item: any) => item.name === "name"
                  )

                  return (
                    <CommandItem>
                      <Checkbox
                        id={nameObject.value}
                        className="mr-2 h-4 w-4"
                      />
                      <label
                        htmlFor={nameObject.value}
                        className="cursor-pointer"
                      >
                        {nameObject.value}
                      </label>
                    </CommandItem>
                  )
                })}
              </CommandGroup>
            )
          })}
        </CommandList>
      </Command>
    </div>
  )
}

export default GetTeams
