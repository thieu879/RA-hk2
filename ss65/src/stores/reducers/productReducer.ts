export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const initialProduct: Product[] = [
  {
    id: 1,
    name: "vải",
    price: 200,
    quantity: 2,
  },
  {
    id: 2,
    name: "cúc",
    price: 200,
    quantity: 2,
  },
];

const reducerProduct = (state = initialProduct, action: any): Product[] => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducerProduct;
