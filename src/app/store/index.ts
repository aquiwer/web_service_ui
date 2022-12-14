import { configureStore } from '@reduxjs/toolkit'
import { matchApi } from '../api/Match.api';
import matchReducer from '../features/match.slice'

export const store = configureStore({
    reducer: {  
        match_state: matchReducer,
        [matchApi.reducerPath]: matchApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(matchApi.middleware),
    
  })
  
  export type RootState = ReturnType<typeof store.getState>
  
  export type AppDispatch = typeof store.dispatch

//@ts-ignore
export const apiUrl = import.meta.VITE_API_URL;

//@ts-ignore
window.store = store;