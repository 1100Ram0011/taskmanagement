// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./slice/authSlice.js";
// import { apiSlice } from "./slice/apislice.js";

// const store = configureStore({
//   reducer: {
//     [apiSlice.reducerPath]: apiSlice.reducer,
//     auth: authReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(apiSlice.middleware),
//   devTools: true,
// });

// export default store;
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice.js";
import { apiSlice } from "./slice/apislice.js";
import uiReducer from "./slice/uiSlice.js";


; // ✅ Import UI Reducer

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    ui: uiReducer, // ✅ Add UI Reducer for Sidebar
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
