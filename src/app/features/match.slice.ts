import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Match, MatchState } from '../interfaces/Match.interface'



const initialState: MatchState = {
    matches: []
}



export const matchSlice = createSlice({
    name:'modal',
    initialState,
    reducers: {
        setFetchedMatches: (state, action: PayloadAction<Match[]>) => {
            state.matches = action.payload;
        }

    }
})


export const { setFetchedMatches} = matchSlice.actions;

export default matchSlice.reducer