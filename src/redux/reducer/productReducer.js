import { ActionType } from "../contants/action_type";
// const { SET_PRODUCT, SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT } = ActionType;
const initialState = {
  product: [],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_PRODUCT:
      return { ...state, products: payload };
    default:
      return state;
  }
};
export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionType.SELECTED_PRODUCT:
      return { ...state, ...payload };

    case ActionType.REMOVE_SELECTED_PRODUCT:
      return {};

    default:
      return state;
  }
};
