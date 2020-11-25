import { CATEGORY_SELECTED } from "../actions/category";
import { ADD_TO_BASKET } from "../actions/category";

const initialState = {
  selectedCategory: "",
  basket: [],
};

export const reducer = (state = initialState, action) => {
  if (action.type === CATEGORY_SELECTED) {
    return { ...state, selectedCategory: action.payload };
  } else if (action.type === ADD_TO_BASKET) {
    return { ...state, basket: [...state.basket, action.payload] };
  }
  return state;
};
