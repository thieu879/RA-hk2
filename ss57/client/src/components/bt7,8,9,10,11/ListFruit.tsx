import React, { useEffect, useState } from 'react';

interface Fruit {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
  create_at: string;
}

export default function ListFruit() {
  const [fruits, setFruits] = useState<Fruit[]>([]);
  const [newFruit, setNewFruit] = useState<Omit<Fruit, 'id'>>({
    name: '',
    img: '',
    price: 0,
    quantity: 0,
    create_at: new Date().toISOString(),
  });
  const [editingFruitId, setEditingFruitId] = useState<number | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const localData = () => {
    fetch("http://localhost:3000/fruit")
      .then((response) => response.json())
      .then((data: Fruit[]) => setFruits(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    localData();
  }, []);

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!newFruit.name) errors.name = "Tên sản phẩm không được để trống";
    if (fruits.some(fruit => fruit.name === newFruit.name)) errors.name = "Tên sản phẩm không được trùng";
    if (!newFruit.img) errors.img = "Ảnh sản phẩm không được để trống";
    if (newFruit.price <= 0) errors.price = "Giá sản phẩm phải lớn hơn 0";
    if (newFruit.quantity < 0) errors.quantity = "Số lượng sản phẩm không được nhỏ hơn 0";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const removeFruitById = (id: number) => {
    fetch(`http://localhost:3000/fruit/${id}`, {
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

  const createFruit = (fruit: Omit<Fruit, 'id'>) => {
    fetch("http://localhost:3000/fruit", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(fruit)
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
        setShowForm(false);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const updateFruitById = (id: number, updatedFruit: Omit<Fruit, 'id'>) => {
    fetch(`http://localhost:3000/fruit/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedFruit)
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
        setEditingFruitId(null);
        setNewFruit({
          name: '',
          img: '',
          price: 0,
          quantity: 0,
          create_at: new Date().toISOString(),
        });
        setShowForm(false);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewFruit({
      ...newFruit,
      [name]: name === 'price' || name === 'quantity' ? Number(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      if (editingFruitId !== null) {
        updateFruitById(editingFruitId, newFruit);
      } else {
        createFruit(newFruit);
      }
    }
  };

  const handleUpdate = (fruit: Fruit) => {
    setEditingFruitId(fruit.id);
    setNewFruit({
      name: fruit.name,
      img: fruit.img,
      price: fruit.price,
      quantity: fruit.quantity,
      create_at: fruit.create_at,
    });
    setShowForm(true);
  };

  return (
    <div>
      <button onClick={() => setShowForm(true)}>Thêm mới sản phẩm</button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newFruit.name}
            onChange={handleInputChange}
          />
          {errors.name && <span>{errors.name}</span>}
          <input
            type="text"
            name="img"
            placeholder="Image URL"
            value={newFruit.img}
            onChange={handleInputChange}
          />
          {errors.img && <span>{errors.img}</span>}
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={newFruit.price}
            onChange={handleInputChange}
          />
          {errors.price && <span>{errors.price}</span>}
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={newFruit.quantity}
            onChange={handleInputChange}
          />
          {errors.quantity && <span>{errors.quantity}</span>}
          <button type="submit">Lưu</button>
          <button type="button" onClick={() => setShowForm(false)}>Hủy</button>
        </form>
      )}
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Create At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {fruits.map((fruit, index) => (
            <tr key={fruit.id}>
              <td>{index + 1}</td>
              <td>{fruit.name}</td>
              <td><img src={fruit.img} alt={fruit.name} width="50" /></td>
              <td>{fruit.price}</td>
              <td>{fruit.quantity}</td>
              <td>{fruit.create_at}</td>
              <td>
                <button onClick={() => removeFruitById(fruit.id)}>Xoá</button>
                <button onClick={() => handleUpdate(fruit)}>Sửa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}