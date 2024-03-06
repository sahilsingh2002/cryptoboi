import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeader = {
  'x-api-key': 'b12dc4b686b94bf0af9fc425544ea175',
}
const baseUrl = 'https://newsapi.org/v2/everything';
const createRequest = (url)=>({url,headers:cryptoNewsHeader});

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query:({count})=>createRequest(`?q=crypto&pageSize=${count}`),
    })
  })
});
export const {useGetCryptoNewsQuery}=cryptoNewsApi;