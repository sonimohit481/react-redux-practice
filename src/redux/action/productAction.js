import { ActionType } from "../contants/action_type";

export const setProduct = (products) => {
  return {
    type: ActionType.SET_PRODUCT,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionType.SELECTED_PRODUCT,
    payload: product,
  };
};
