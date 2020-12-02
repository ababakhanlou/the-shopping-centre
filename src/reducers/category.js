import {
  CATEGORY_SELECTED,
  REMOVE_FROM_BASKET,
  ADD_TO_BASKET,
  DEDUCT_FROM_BASKET,
} from "../actions/category";

const initialState = {
  selectedCategory: "",
  basket: [],
};

export const reducer = (state = initialState, action) => {
  if (action.type === CATEGORY_SELECTED) {
    return { ...state, selectedCategory: action.payload };
  } else if (action.type === ADD_TO_BASKET) {
    const basketItem = { ...action.payload, qty: 1 };
    const newBasket = state.basket.filter(
      (item) => item.item !== action.payload.item
    );
    const stateItem = state.basket.find(
      (item) => item.item === action.payload.item
    );

    if (!!stateItem) {
      basketItem.qty = stateItem.qty + 1;
    }
    newBasket.push(basketItem);
    newBasket.sort(compare);

    return { ...state, basket: [...newBasket] };
  } else if (action.type === REMOVE_FROM_BASKET) {
    const newBasket = state.basket.filter(
      (item) => item.item !== action.payload
    );
    return { ...state, basket: newBasket };
  } else if (action.type === DEDUCT_FROM_BASKET) {
    const stateItem = state.basket.find((item) => item.item === action.payload);
    const newBasket = state.basket.filter(
      (item) => item.item !== action.payload
    );

    if (stateItem.qty === 1) {
      return { ...state, basket: newBasket };
    }

    const basketItem = {
      ...stateItem,
      qty: stateItem.qty - 1,
    };
    newBasket.push(basketItem);
    newBasket.sort(compare);

    return { ...state, basket: newBasket };
  }
  return state;
};

function compare(a, b) {
  if (a.item < b.item) {
    return -1;
  }
  if (a.item > b.item) {
    return 1;
  }
  return 0;
}
