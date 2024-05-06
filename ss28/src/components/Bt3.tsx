import React, { useState } from 'react';

export default function Bt3() {
  // Khởi tạo state chứa danh sách users
  const [users, setUsers] = useState([
    { id: 1, name: 'Nguyễn Gia Thiều', address: 'Nam Định' },
    { id: 2, name: 'Gia Vải', address: 'Nhà' },
  ]);

  return (
    <>
      Bt3:
      <ul>
        {/* Sử dụng hàm map để render danh sách users */}
        {users.map(user => (
          <li key={user.id}>
            <b>ID:</b> {user.id}, <b>Name:</b> {user.name}, <b>Address:</b> {user.address}
          </li>
        ))}
      </ul>
    </>
  );
}
