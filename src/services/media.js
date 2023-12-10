import { emptyApi } from './apiSetup';

export const mediaApi = emptyApi.injectEndpoints({
  endpoints: build => ({
    getFotoMedia: build.query({
      query: (page = 1) => {
        return { url: `media?parent=22&page=${page}&per_page=5` };
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      }
    })
  }),
  overrideExisting: false
});

export const { useGetFotoMediaQuery } = mediaApi;
