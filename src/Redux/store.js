import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import mainReducer from "./Reducers/MainReducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, mainReducer);

const store = createStore(persistedReducer);
export const persistor = persistStore(store);

export default store;
