function inventory(brand) {
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
      model: "X",
      item: "Console",
      price: 500,
      displayName: "XBox X Console",
    },
    {
      brand: "Nintendo",
      model: "Switch",
      item: "Console",
      price: 200,
      displayName: "Nintendo Switch Console",
    },
  ];

  return stock.filter((item) => item.brand === brand);
}

export default inventory;
