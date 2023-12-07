import { emptyApi } from './apiSetup';

export const mediaApi = emptyApi.injectEndpoints({
  endpoints: build => ({
    getFotoMedia: build.query({
      query: () => {
        return { url: 'media?parent=22&per_page=20' };
      },
      providesTags: ['Media']
    })
  }),
  overrideExisting: false
});

export const { useGetFotoMediaQuery } = mediaApi;
