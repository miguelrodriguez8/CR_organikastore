import cartCounterReducer from "./cartCounter";
import { combineReducers } from "redux";
import todoReducer from './todoReducer';
import cartProductsReducer from './cartProducts';

const rootReducer = combineReducers({
    count: cartCounterReducer,
    todos: todoReducer,
    cart: cartProductsReducer
});

export default rootReducer;