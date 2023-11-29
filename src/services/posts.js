import { emptyApi } from './apiSetup';

export const postsApi = emptyApi.injectEndpoints({
  endpoints: build => ({
    getPosts: build.query({
      query: () => {
        return { url: 'posts' };
      },
      providesTags: ['Posts']
    })
  }),
  overrideExisting: false
});

export const { useGetPostsQuery } = postsApi;
