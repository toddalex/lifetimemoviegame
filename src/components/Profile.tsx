import React from 'react';
import Button from './UI/Button';
import { ButtonType } from '../models';

interface Props {
  user: any,
  signOut: () => void
}
const Profile: React.FC<Props> = ({
  user,
  signOut
}) => {
  return user ? (
    <>
      <h1>Profile</h1>
      <h3>Email: {user.email}</h3>
      <Button title={ButtonType.SignOut} onClick={signOut} />
    </>
  ) : null
};

export default Profile;