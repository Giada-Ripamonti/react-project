import { configureStore, combineReducers } from "@reduxjs/toolkit";
import FavReducer from "../reducers/favReducer";
import UserReducer from "../reducers/userReducer"

const bigReducer = combineReducers({
    fav: FavReducer,
    user: UserReducer,
})

const Store = configureStore({
  reducer: bigReducer,
});

export default Store;
