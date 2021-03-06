import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "./auth/authApi";
import authReducer from "./auth/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import cartReducer from "./cart/cartSlice";

const reducers = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  [authApi.reducerPath]: authApi.reducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth"],
};

const RootReducer = (state, action) => {
  if (action.type === "auth/logout") {
    state = undefined;
  }
  return reducers(state, action);
};

const _persistedReducer = persistReducer(persistConfig, RootReducer);

export const store = configureStore({
  devTools: __DEV__,
  reducer: _persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      authApi.middleware
    ),
});
export const persistor = persistStore(store);

setupListeners(store.dispatch);
