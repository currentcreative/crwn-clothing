import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
//tells redux-persist you want to use local storage
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

//specifying redux-persist; Firebase is handling users, so we just want to whitelist 'cart'
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

// redux-persist pt. 3 - must set our combineReducers to 'rootReducer'
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

//redux-persist pt. 4 - export both above settings with persistReducer()
export default persistReducer(persistConfig, rootReducer);
