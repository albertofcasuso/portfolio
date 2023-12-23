import { emptyApi } from './apiSetup';

export const proyectosApi = emptyApi.injectEndpoints({
  endpoints: build => ({
    getProyectos: build.query({
      query: () => {
        return { url: 'proyectos' };
      },
      providesTags: ['Proyectos']
    }),
    getStreetProjects: build.query({
      query: (page = 1) => {
        return { url: `street?page=${page}&per_page=4` };
      },
      providesTags: ['StreetProject'],
      transformResponse: (response, meta) => {
        const totalPages = meta.response.headers.get('x-wp-totalpages');
        return { data: response, totalPages };
      }
    })
  }),
  overrideExisting: false
});

export const { useGetProyectosQuery, useGetStreetProjectsQuery } = proyectosApi;
