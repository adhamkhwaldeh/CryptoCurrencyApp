import { createStore, combineReducers, applyMiddleware } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

import statusUpdatesReducer from "./StatusUpdates";
import searchTrendReducer from "./SearchTrend";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["bookmarks"],
};

export default combineReducers({
  statusUpdates: persistReducer(persistConfig, statusUpdatesReducer),
  searchTrend: persistReducer(persistConfig, searchTrendReducer),
});
