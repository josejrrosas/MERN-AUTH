import { configureStore } from "@reduxjs/toolkit";
//in order to use any slice you must bring it into the store
import authReducer from "./slices/authSlice";
import { apiSlice } from "./slices/apiSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer, //adds api to state, gives us a lot to work with without having to do extra work, like queries, mutations ,provided
  },
  //add thunk middleware, which is the apieSlice.middleware
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devtools: true,
});

export default store;
