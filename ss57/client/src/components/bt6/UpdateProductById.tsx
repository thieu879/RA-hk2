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
  const [newProduct, setNewProduct] = useState<Omit<Product, 'id'>>({
    name: '',
    img: '',
    price: 0,
    quantity: 0,
    create_at: new Date().toISOString(),
  });
  const [editingProductId, setEditingProductId] = useState<number | null>(null);

  const localData = () => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data: Product[]) => setProducts(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    localData();
  }, []);

  const getProductById = (id: number) => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Không tìm thấy bản ghi');
        }
        return response.json();
      })
      .then((product: Product) => {
        console.log(product);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

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

  const createProduct = (product: Omit<Product, 'id'>) => {
    fetch("http://localhost:3000/products", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Thêm mới không thành công');
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

  const updateProductById = (id: number, updatedProduct: Omit<Product, 'id'>) => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedProduct)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Cập nhật không thành công');
        }
        return response.json();
      })
      .then((result) => {
        console.log(result);
        localData();
        setEditingProductId(null);
        setNewProduct({
          name: '',
          img: '',
          price: 0,
          quantity: 0,
          create_at: new Date().toISOString(),
        });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: name === 'price' || name === 'quantity' ? Number(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editingProductId !== null) {
      updateProductById(editingProductId, newProduct);
    } else {
      createProduct(newProduct);
    }
  };

  const handleUpdate = (product: Product) => {
    setEditingProductId(product.id);
    setNewProduct({
      name: product.name,
      img: product.img,
      price: product.price,
      quantity: product.quantity,
      create_at: product.create_at,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newProduct.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="img"
          placeholder="Image URL"
          value={newProduct.img}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={newProduct.price}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={newProduct.quantity}
          onChange={handleInputChange}
        />
        <button type="submit">{editingProductId !== null ? 'Update Product' : 'Add Product'}</button>
      </form>
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Create At</th>
            <th>Actions</th>
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
                <button onClick={() => handleUpdate(product)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
