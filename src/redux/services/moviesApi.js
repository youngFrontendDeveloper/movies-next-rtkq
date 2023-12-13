import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/movies"
  })
})