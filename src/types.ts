export interface Basket {
  item: string;
  price: number;
  qty: number;
}

export interface State {
  selectedCategory: string;
  basket: Basket[];
}

export interface Action {
  type: string;
  payload: any;
}

export interface Stock {
  brand: string;
  model: string;
  item: string;
  price: number;
  displayName: string;
}