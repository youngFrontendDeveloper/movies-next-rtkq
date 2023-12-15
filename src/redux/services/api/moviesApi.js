import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const moviesApi = createApi( {
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery( {
    baseUrl: "http://localhost:3001"
  } ),
  tagTypes: ['Movie'],   //   для автоматического обновления данных после изменения movie
  endpoints: (builder) => ( {
    getMovies: builder.query( {
      query: () => "/movies",
      providesTags: ['Movie']     //   для автоматического обновления store (получения новых данных с сервера) после изменения movie
    } ),
    getMovieById: builder.query( {
      query: (id) => `/movies/${ id }`,
    } ),
    deleteMovie: builder.mutation( {
      query: (id) => ( {
        url: `/movies/${ id }`,
        method: "DELETE",
      } ),
      invalidatesTags: [ "Movie" ],    //   для автоматического обновления store (получения новых данных с сервера) после изменения movie
    } ),
    addNewMovie: builder.mutation( {
      query: (initialMovie) => ( {
        url: "/movies",
        method: "POST",
        body: initialMovie
      } ),
      invalidatesTags: ['Movie']    //   для автоматического обновления store (получения новых данных с сервера) после изменения movie
    } ),
    editMovie: builder.mutation( {
      query: ( movie ) => ( {
        url: `/movies/${ movie.id }`,
        method: "PATCH",
        body: movie,
      } ),
      invalidatesTags: ['Movie']
    } ),


  } ),
} );

export const {
  useGetMoviesQuery,
  useGetMovieByIdQuery,
  useDeleteMovieMutation,
  useAddNewMovieMutation,
  useEditMovieMutation
} = moviesApi;