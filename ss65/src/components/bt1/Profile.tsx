import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../stores/store';
import { UserProfile } from '../reducers/profileReducer';

const Profile: React.FC = () => {
  const users = useSelector((state: RootState) => state.users);

  return (
    <div>
      {users.map((user: UserProfile) => (
        <div key={user.id}>
          <p>ID: {user.id}</p>
          <p>User Name: {user.userName}</p>
          <p>Gender: {user.gender}</p>
          <p>Date of Birth: {user.dateBirth}</p>
          <p>Address: {user.address}</p>
        </div>
      ))}
    </div>
  );
}

export default Profile;
