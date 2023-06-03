import { AxiosError } from "axios"

export const HandleAxiosError = (err: AxiosError) => {
  return console.error(err)
}

export const HandleInternalError = (err: Error, message: string) => {
  return console.error(message, err)
}
