const stock = [
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
  {
    brand: "XBox",
    model: "Series X",
    item: "Console",
    price: 500,
    displayName: "XBox Series X Console",
  },
  {
    brand: "Nintendo",
    model: "Switch",
    item: "Console",
    price: 200,
    displayName: "Nintendo Switch Console",
  },
  {
    brand: "Sega",
    model: "DreamCast",
    item: "Console",
    price: 1000,
    displayName: "Sega DreamCast Console",
  },
];

export function getItemByBrand(brand) {
  return stock.filter((item) => item.brand === brand);
}

export function getItemBySearch(displayName) {
  return stock.filter((item) =>
    item.displayName.toLowerCase().includes(displayName.toLowerCase())
  );
}
