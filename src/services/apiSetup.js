import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const emptyApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.afcasuso.com/wp-json/wp/v2'
  }),
  tagTypes: ['StreetProject', 'Posts', 'Proyectos'],
  endpoints: () => ({})
});
