import { configureStore } from "@reduxjs/toolkit";
import symptomCheckerReducer from "./slices/symptomChecker";
import cancerDetectorReducer from "./slices/cancerDetector";
import { backendApi } from "./api";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    symptomChecker: symptomCheckerReducer,
    cancerDetector: cancerDetectorReducer,
    [backendApi.reducerPath]: backendApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(backendApi.middleware),
});

setupListeners(store.dispatch);
