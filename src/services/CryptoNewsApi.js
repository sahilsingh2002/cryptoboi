import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const baseUrl = 'https://newsapi.org/v2/everything';
const createRequest = (url)=>({url});
const REACT_APP_API_KEY = "b12dc4b686b94bf0af9fc425544ea175"

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query:({count})=>createRequest(`?q=crypto&pageSize=${count}&apikey=${REACT_APP_API_KEY}`),
    })
  })
});
export const {useGetCryptoNewsQuery}=cryptoNewsApi;