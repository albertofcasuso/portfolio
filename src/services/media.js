import { emptyApi } from './apiSetup';

export const mediaApi = emptyApi.injectEndpoints({
  endpoints: build => ({
    getFotoMedia: build.query({
      query: (page = 1) => {
        return { url: `media?parent=67&page=${page}&per_page=10` };
      }
    })
  }),
  overrideExisting: false
});

export const { useGetFotoMediaQuery } = mediaApi;
