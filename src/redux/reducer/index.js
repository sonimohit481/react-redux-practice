import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

const reducer = combineReducers({
  allProduct: productReducer,
  product: selectedProductReducer,
});
export default reducer;
