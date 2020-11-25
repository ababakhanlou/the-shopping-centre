export const CATEGORY_SELECTED = "CATEGORY_SELECTED";
export const ADD_TO_BASKET = "ADD_TO_BASKET";

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
