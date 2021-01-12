import { getBasketItemCount, getBasketTotal } from "./checkout";

describe("getBasketItemCount", () => {
  it("should return the number of item inside the basket", () => {
    const state = { basket: [] };
    expect(getBasketItemCount(state)).toBe(0);
    state.basket.push({ qty: 6 });
    state.basket.push({ qty: 9 });
    expect(getBasketItemCount(state)).toBe(15);
  });
});

describe("getBasketTotal", () => {
  it("should return the price total of items inside the basket", () => {
    const state = { basket: [] };
    expect(getBasketTotal(state)).toBe(0);
    state.basket.push({ qty: 1, price: 100 });
    state.basket.push({ qty: 2, price: 50 });
    expect(getBasketTotal(state)).toBe(200);
  });
});
