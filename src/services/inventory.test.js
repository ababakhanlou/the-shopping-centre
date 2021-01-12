import { getItemByBrand, getItemBySearch } from "./inventory";

describe("getItemByBrand", () => {
  it("should return items of correct brand", () => {
    expect(getItemByBrand("Nintendo")).toStrictEqual([
      {
        brand: "Nintendo",
        model: "Switch",
        item: "Console",
        price: 200,
        displayName: "Nintendo Switch Console",
      },
    ]);
  });
});

describe("getItemBySearch", () => {
  it("should return items based on search string", () => {
    expect(getItemBySearch("station")).toStrictEqual([
      {
        brand: "PlayStation",
        model: "5",
        item: "Console",
        price: 500,
        displayName: "Playstation 5 Console",
      },
      {
        brand: "PlayStation",
        model: "4",
        item: "Console",
        price: 200,
        displayName: "Playstation 4 Console",
      },
    ]);
  });

  it("should return an empty list on no matches", () => {
    expect(getItemBySearch("Ham Sandwich")).toStrictEqual([]);
  });
});
