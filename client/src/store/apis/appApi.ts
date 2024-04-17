import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

export const appApi = createApi({
  reducerPath: 'appApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => {
        return {
          url: `posts`,
          method: 'GET',
          headers: [['Content-Type', 'application/json']],
        };
      },
    }),
  }),
});

export const { useGetPostsQuery } = appApi;

export default appApi;
