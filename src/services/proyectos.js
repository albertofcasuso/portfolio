import { emptyApi } from './apiSetup';

export const proyectosApi = emptyApi.injectEndpoints({
  endpoints: build => ({
    getProyectos: build.query({
      query: () => {
        return { url: 'proyectos' };
      },
      providesTags: ['Proyectos']
    })
  }),
  overrideExisting: false
});

export const { useGetProyectosQuery } = proyectosApi;
