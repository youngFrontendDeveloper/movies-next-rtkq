import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { moviesApi } from "@/redux/services/moviesApi";


export const makeStore = () => {
  return configureStore( {
    reducer: {
      [ moviesApi.reducerPath ]: moviesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(moviesApi.middleware),
    devTools: process.env.NODE_ENV !== "production",
  } );
};
setupListeners(makeStore.dispatch);

// export const store = configureStore ( {
//     reducer: {
//       [ moviesApi.reducerPath ]: moviesApi.reducer,
//     },
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware().concat(moviesApi.middleware),
//     devTools: process.env.NODE_ENV !== "production",
//   } );

// setupListeners(store.dispatch);