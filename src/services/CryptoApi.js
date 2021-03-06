import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'd73d67ba3amshe6ff77ae8141934p165514jsn99adb33f432f'
}
const baseUrl = 'https://coinranking1.p.rapidapi.com';
const createRequest = (url) => ({url, headers: cryptoHeaders});

export const CryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoStats: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timePeriod}) => createRequest(`/coin/${coinId}/history/${timePeriod}`)
        }),
        getExchanges: builder.query({
            query: () => createRequest(`/exchanges`)
        })
    })
})

export const { useGetCryptoStatsQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetExchangesQuery } = CryptoApi;