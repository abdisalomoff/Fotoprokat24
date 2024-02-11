import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../root.reducer";
import {FLUSH,PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore,} from "redux-persist";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistore = persistStore(store);