"use client"
import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage

import clothReducer from "./slices/clothslice.js";
import foodReducer from "./slices/foodslice.js";
import itemsSlice from "./slices/items.js";
import bagitemReducer  from "./slices/bag.js";
import historyReducer from "./slices/historySlice.js";
import medicineReducer from "./slices/medicineslice.js";

// Combine all reducers
const rootReducer = combineReducers({
  cloth: clothReducer,
  food: foodReducer,
  medicine: medicineReducer,
  items: itemsSlice.reducer,
  history: historyReducer,
  bagitem: bagitemReducer,
});

// Persist config
const persistConfig = {
  key: "root",           // key must be 'root' for combined reducer
  storage,
  whitelist: ["bagitem"], // only bagitem will persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with middleware fix
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/FLUSH",
          "persist/PAUSE",
          "persist/PURGE",
          "persist/REGISTER",
        ],
      },
    }),
});

// Persistor for <PersistGate>
export const persistor = persistStore(store);
