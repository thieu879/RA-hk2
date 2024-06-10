import React, { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
  create_at: string;
}

export default function GetAllProduct() {
  const [products, setProducts] = useState<Product[]>([]);

  const localData = () => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data: Product[]) => setProducts(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    localData();
  }, []);

  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Create At</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td><img src={product.img} alt={product.name} width="50" /></td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.create_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
