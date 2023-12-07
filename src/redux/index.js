import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { postsApi } from '../services/posts';
import { proyectosApi } from '../services/proyectos';
import { mediaApi } from '../services/media';

const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [proyectosApi.reducerPath]: proyectosApi.reducer,
    [mediaApi.reducerPath]: mediaApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([postsApi.middleware, proyectosApi.middleware, mediaApi.middleware])
});
setupListeners(store.dispatch);

export default store;
