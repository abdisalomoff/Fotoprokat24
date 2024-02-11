import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import cartReducer from "./slice/cart.slice";
import getDataReducer from "./slice/fetchData.slice"


const cartPersistConfig = {
  key: "cart",
  storage,
};

const dataPersistConfig = {
  key: "data",
  storage,
};

export const rootReducer = combineReducers({
  cart: persistReducer(cartPersistConfig, cartReducer),
  data: persistReducer(dataPersistConfig, getDataReducer),
});
