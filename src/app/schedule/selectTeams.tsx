import React, { useEffect } from "react"

import { useScheduleStore } from "@/libs/stores"
import { Checkbox } from "@/components/common/checkbox"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/common/command"

const SelectTeams = ({ teams }: any) => {
  const selectedTeams = useScheduleStore((state) => state.teams)
  const addTeam = useScheduleStore((state) => state.addTeam)
  const removeTeam = useScheduleStore((state) => state.removeTeam)
  const setter = useScheduleStore((state) => state.setAllTeams)
  const selectAll = useScheduleStore((state) => state.selectAllTeams)
  const clearTeams = useScheduleStore((state) => state.clearTeams)
  const allTeams = useScheduleStore((state) => state.allTeams)

  useEffect(() => {
    console.log(teams)
    if (teams.length < 0) return

    const allTeams = teams.map((age: any) => {
      const key = Object.keys(age)
      return age[key[0]].items.map((team: any) => {
        const nameObject = team.data.find((item: any) => item.name === "name")
        const idObject = team.data.find((item: any) => item.name === "id")

        return {
          id: idObject.value as number,
          name: nameObject.value as string,
        }
      })
    })

    setter(allTeams.flat())

    selectAll()
  }, [])

  console.log(selectedTeams)

  return (
    <div className="mt-4">
      {/* <h2 className="font-heading text-lg font-semibold lg:text-xl">Teams</h2> */}
      <Command className="">
        <CommandInput placeholder="Search for a team..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup className="mt-2">
            <CommandItem
              onSelect={() =>
                selectedTeams.length > 0 ? clearTeams() : selectAll()
              }
              className="cursor-pointer"
            >
              <Checkbox
                className="mr-2 h-4 w-4"
                checked={
                  selectedTeams.length > 0
                    ? selectedTeams.length === allTeams.length
                      ? true
                      : "indeterminate"
                    : false
                }
              />
              <p>Select All</p>
            </CommandItem>
          </CommandGroup>

          {teams.map((age: any) => {
            const key = Object.keys(age)
            return (
              <CommandGroup key={key[0]} heading={key[0]}>
                {age[key[0]].items.map((team: any) => {
                  const nameObject = team.data.find(
                    (item: any) => item.name === "name"
                  )
                  const idObject = team.data.find(
                    (item: any) => item.name === "id"
                  )

                  const isSelected = selectedTeams.some(
                    (t) => t.id === idObject.value
                  )

                  return (
                    <CommandItem
                      key={nameObject.value}
                      onSelect={() =>
                        isSelected
                          ? removeTeam({
                              id: idObject.value as number,
                              name: nameObject.value as string,
                            })
                          : addTeam({
                              id: idObject.value as number,
                              name: nameObject.value as string,
                            })
                      }
                      className="cursor-pointer"
                    >
                      <Checkbox
                        id={nameObject.value}
                        className="mr-2 h-4 w-4"
                        checked={isSelected}
                      />
                      <p>{nameObject.value}</p>
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

export default SelectTeams
