import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "reduxjs-toolkit-persist";
import storage from "reduxjs-toolkit-persist/lib/storage";
import dataReducer from "./dataSlice";
import reviewsReducer from "./reviewSlice";
import userReducer from "./usersSlice";
import bookingReducer from "./bookingsSlice";
import { EPaths } from "../../types";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  [EPaths.PROPERTIES]: dataReducer,
  [EPaths.BOOKINGS]: bookingReducer,
  [EPaths.REVIEWS]: reviewsReducer,
  [EPaths.USERS]: userReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: [...getDefaultMiddleware({ thunk: false })],
});
const persistor = persistStore(store);
console.log(persistor);

export { store, persistor, reducers };

export type RootState = ReturnType<typeof store.getState>;
