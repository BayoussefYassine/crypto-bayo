import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const newsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'd73d67ba3amshe6ff77ae8141934p165514jsn99adb33f432f'
}
const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news';
const createRequest = (url) => ({url, headers: newsHeaders});

export const NewsApi = createApi({
    reducerPath: 'NewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const { useGetCryptoNewsQuery } = NewsApi;