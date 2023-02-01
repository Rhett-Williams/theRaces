import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError, retry } from '@reduxjs/toolkit/query/react'
import {BASE_URL} from '@env'

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: async (headers, api) => {
        return headers
    },
    credentials: 'include'
})

const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    return result
}

const baseQueryWithRetry = retry(baseQueryWithReauth, { maxRetries: 2 })

const API = createApi({
    reducerPath: "EntainApi",
    baseQuery: baseQueryWithRetry,
    endpoints: () => ({ }),
    tagTypes: ['Races'],
})

export default API