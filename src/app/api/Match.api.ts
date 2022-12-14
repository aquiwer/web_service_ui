
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setFetchedMatches } from '../features/match.slice'
import { Match } from '../interfaces/Match.interface'

export const matchApi = createApi({
    reducerPath: 'matchApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/match'}),
    endpoints: (builder) => ({
        addClub: builder.mutation<Match[], Match>({
            query: (body: Match) => ({
                url: '/add',
                method: 'POST',
                 body
            })
        }),
        fetchAllClubs: builder.query<Match[], null>({
            query: () => 'all',
            async onQueryStarted(id, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                  dispatch(setFetchedMatches(data));

                } catch (err) {
              
                  if (err instanceof Error) {
        
                    throw new Error(err.message)
                  }
        
        
                }
              },
        }),
        findMatch: builder.query<Match[], string>({
            query: (country: string) => ({
              url: `/${country}`,
              method: 'GET',
            }),
            async onQueryStarted(id, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                  dispatch(setFetchedMatches(data));

                } catch (err) {
              
                  if (err instanceof Error) {
        
                    throw new Error(err.message)
                  }
        
        
                }
              },
        })
    })
})


export const { useAddClubMutation, useFetchAllClubsQuery, useFindMatchQuery } = matchApi;