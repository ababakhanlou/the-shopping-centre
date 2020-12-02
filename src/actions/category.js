export const CATEGORY_SELECTED = "CATEGORY_SELECTED";
export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const DEDUCT_FROM_BASKET = "DEDUCT_FROM_BASKET";
export const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET";

export const setCategory = (payload) => {
  return {
    type: CATEGORY_SELECTED,
    payload,
  };
};

export const addToBasket = (item, price) => {
  return {
    type: ADD_TO_BASKET,
    payload: { item, price },
  };
};

export const deductFromBasket = (item) => {
  return {
    type: DEDUCT_FROM_BASKET,
    payload: item,
  };
};

export const removeFromBasket = (item) => {
  return {
    type: REMOVE_FROM_BASKET,
    payload: item,
  };
};
