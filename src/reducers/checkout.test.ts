import { reducer } from "./checkout";
import { State } from "../types";

describe("reducer", () => {
  const initialState = {
    selectedCategory: "",
    basket: [],
  };

  describe("CATEGORY_SELECTED", () => {
    it("should return state with the new selected category", () => {
      expect(
        reducer(initialState, {
          type: "CATEGORY_SELECTED",
          payload: "PlayStation",
        })
      ).toStrictEqual({ ...initialState, selectedCategory: "PlayStation" });
    });
  });

  describe("ADD_TO_BASKET", () => {
    it("should return the new basket with added item", () => {
      const newState = reducer(initialState, {
        type: "ADD_TO_BASKET",
        payload: { item: "Nintendo" },
      });
      expect(newState).toStrictEqual({
        ...initialState,
        basket: [{ item: "Nintendo", qty: 1 }],
      });
      expect(
        reducer(newState, {
          type: "ADD_TO_BASKET",
          payload: { item: "Nintendo" },
        })
      ).toStrictEqual({ ...newState, basket: [{ item: "Nintendo", qty: 2 }] });
    });
  });

  describe("REMOVE_FROM_BASKET", () => {
    it("should return new basket with removed item", () => {
      const state = { ...initialState, basket: [{ item: "Nintendo", qty: 2 }] };
      expect(
        reducer(state, {
          type: "REMOVE_FROM_BASKET",
          payload: "Nintendo",
        })
      ).toStrictEqual({ ...state, basket: [] });
    });
  });

  describe("DEDUCT_FROM_BASKET", () => {
    it("should return new basket with deducted 1 from qty on selected item", () => {
      const state = { ...initialState, basket: [{ item: "Nintendo", qty: 2 }] };
      const newState = reducer(state, {
        type: "DEDUCT_FROM_BASKET",
        payload: "Nintendo",
      });
      expect(newState).toStrictEqual({
        ...state,
        basket: [{ item: "Nintendo", qty: 1 }],
      });
      expect(
        reducer(newState, {
          type: "DEDUCT_FROM_BASKET",
          payload: "Nintendo",
        })
      ).toStrictEqual({
        ...state,
        basket: [],
      });
    });
  });
});
