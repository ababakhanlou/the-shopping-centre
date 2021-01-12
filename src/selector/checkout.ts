import {State} from "../types"

export const getBasketItemCount = (state:State) => {
  const basket = state.basket;
  let basketCount = 0;
  if (basket.length > 0) {
    basket.map((item) => (basketCount = basketCount + item.qty));
  }
  return basketCount;
};

export const getBasketTotal = (state:State) => {
  let totalPrice = 0;
  state.basket.forEach((item) => {
    totalPrice = totalPrice + item.price * item.qty;
  });
  return totalPrice;
};
