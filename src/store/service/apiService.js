import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const ApiService = createApi({
    reducerPath : "api",
    baseQuery : fetchBaseQuery({
        baseUrl : "https://fakestoreapi.com",
    }),
    endpoints : (builder) => ({})

})