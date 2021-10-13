import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import cartReducer from "./Modules/Cart/reducer";
import productsReducer from "./Modules/Products/reducer";

const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));
export default store;
