import API from "../utils/API";

const AuthService = API.injectEndpoints({
    endpoints: builder => ({
        getRaces: builder.query<any, number | void>({
            query: (args) => ({
                url: `racing/?method=nextraces&count=${args ?? 10}`,
            })
        }),
    })
})

export const  { useGetRacesQuery, useLazyGetRacesQuery } = AuthService