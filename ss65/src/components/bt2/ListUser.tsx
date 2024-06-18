import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../stores/store';
import { UserProfile } from '../reducers/profileReducer';

const ListUser: React.FC = () => {
  const users = useSelector((state: RootState) => state.users);

  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>User Name</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Address</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: UserProfile) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.userName}</td>
              <td>{user.gender}</td>
              <td>{user.dateBirth}</td>
              <td>{user.address}</td>
              <td>
                <button>sửa</button>
                <button>xoá</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListUser;
