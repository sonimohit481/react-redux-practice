import { ActionType } from "../contants/action_type";
// const { SET_PRODUCT, SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT } = ActionType;
const initialState = {
  product: [
    {
      id: 1,
      name: "mohit snoi",
      category: "programmer",
    },
  ],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_PRODUCT:
      break;
    default:
      break;
  }
};
