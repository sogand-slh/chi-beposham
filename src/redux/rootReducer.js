import { combineReducers } from "redux";
import productReducer from "./products/productsReducer";

const rootReducer = combineReducers({
  productState: productReducer,

});

export default rootReducer;