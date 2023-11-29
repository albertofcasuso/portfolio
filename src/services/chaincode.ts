import { emptyApi } from './apiSetup';

export const chaincodeApi = emptyApi.injectEndpoints({
  endpoints: build => ({
    getAllResources: build.query({
      query: () => {
        return { url: '', method: 'POST', body: { operation: '' } };
      },
      providesTags: ['']
    })
  }),
  overrideExisting: false
});

export const { useGetAllResourcesQuery } = chaincodeApi;
