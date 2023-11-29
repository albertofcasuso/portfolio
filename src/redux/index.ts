import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { chaincodeApi } from '../services/chaincode';

const store = configureStore({
  reducer: {
    [chaincodeApi.reducerPath]: chaincodeApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat([chaincodeApi.middleware])
});
setupListeners(store.dispatch);

export default store;
