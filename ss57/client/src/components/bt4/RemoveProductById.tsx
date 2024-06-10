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

  const removeProductById = (id: number) => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: 'DELETE'
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Xóa không thành công');
        }
        return response.json();
      })
      .then((result) => {
        console.log(result);
        localData();
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
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
              <td>
                <button onClick={() => removeProductById(product.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
