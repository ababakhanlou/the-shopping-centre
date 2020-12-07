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
  switch (action.type) {
    case CATEGORY_SELECTED: {
      return { ...state, selectedCategory: action.payload };
    }
    case ADD_TO_BASKET: {
      const basketItem = { ...action.payload, qty: 1 };
      const newBasket = createNewBasket(state.basket, action.payload.item);
      const stateItem = createStateItem(state.basket, action.payload.item);

      if (!!stateItem) {
        basketItem.qty = stateItem.qty + 1;
      }
      newBasket.push(basketItem);
      newBasket.sort(compare);

      return { ...state, basket: [...newBasket] };
    }
    case REMOVE_FROM_BASKET: {
      const newBasket = createNewBasket(state.basket, action.payload);
      return { ...state, basket: newBasket };
    }
    case DEDUCT_FROM_BASKET: {
      const newBasket = createNewBasket(state.basket, action.payload);
      const stateItem = createStateItem(state.basket, action.payload);
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
    default:
      return state;
  }
};

const compare = (a, b) => {
  if (a.item < b.item) {
    return -1;
  }
  if (a.item > b.item) {
    return 1;
  }
  return 0;
};

const createNewBasket = (basket, payloadItem) =>
  basket.filter((item) => item.item !== payloadItem);

const createStateItem = (basket, payloadItem) =>
  basket.find((item) => item.item === payloadItem);
