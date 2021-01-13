import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import createRoom from "./Reducers/createApartment";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, createRoom);

const store = createStore(persistedReducer);
export const persistor = persistStore(store);

export default store;
