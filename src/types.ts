/* vue-query should be returning this type automatically, but it isn't */
import type { Ref } from 'vue'
export type VueQueryResponse<T> = {
  data: Ref<T | undefined>
  error: Ref<Error | undefined>
  isError: Ref<boolean>
  isFetching: Ref<boolean>
  isIdle: Ref<boolean>
  isLoading: Ref<boolean>
  isSuccess: Ref<boolean>
}

export type Result = {
  score: number
  show: Show
}

export type Show = {
  id: number
  url: string
  name: string
  type: string
  language: string
  genres: string[]
  status: string
  runtime: string
  averageRuntime: string
  premiered: string
  ended: string
  officialSite: string
  schedule: { days: string[]; time: string }
  rating: { average: number }
  weight: string
  network: {
    id: number
    name: string
    officialSite: string
    country: {
      code: string
      name: string
      timezone: string
    }
  }
  webChannel: string
  dvdCountry: string
  externals: { ibdm: string; thetvdb: string; tvrage: string }
  image: { medium: string; original: string }
  summary: string
  updated: string
}
