import API from "../utils/API";
import { Types } from "../utils/Types";

const AuthService = API.injectEndpoints({
    endpoints: builder => ({
        getRaces: builder.query<Types.GetRacesData, number | void>({
            query: (args) => ({
                url: `racing/?method=nextraces&count=${args ?? 10}`,
            })
        }),
    })
})

export const  { useGetRacesQuery, useLazyGetRacesQuery } = AuthService