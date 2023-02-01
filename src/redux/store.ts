import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import racesReducer from './racesSlice';
import API from '../utils/API';

export const store = configureStore({
   
    reducer:{
        races : racesReducer,
        [API.reducerPath]: API.reducer,
    },
    devTools: true,

    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(API.middleware)

})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useEntainDispatch = () => useDispatch<AppDispatch>()
export const useEntainSelector: TypedUseSelectorHook<RootState> = useSelector