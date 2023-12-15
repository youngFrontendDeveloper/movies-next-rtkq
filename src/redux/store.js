import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { moviesApi } from "./services/api/moviesApi";
import foundedResultsReducer from "./services/foundedResultsSlice";


export const makeStore = () => {
  return configureStore( {
    reducer: {
      foundedResults: foundedResultsReducer,
      [ moviesApi.reducerPath ]: moviesApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(moviesApi.middleware),

    devTools: process.env.NODE_ENV !== "production",
  } );
};


// export const store = configureStore ( {
//     reducer: {
//       [ moviesApi.reducerPath ]: moviesApi.reducer,
//     },
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware().concat(moviesApi.middleware),
//     devTools: process.env.NODE_ENV !== "production",
//   } );

// setupListeners(store.dispatch);