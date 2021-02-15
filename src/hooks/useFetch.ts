/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import useSWR from 'swr'

export function useFetch<Data = string, Error = string>(url: string) {
  const { data, error } = useSWR<Data, Error>(url, async url => {
    const response = await fetch(url)
    const data = await response.json()

    return data
  })

  return { data, error }
}
