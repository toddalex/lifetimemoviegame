import React, { useState, useEffect } from 'react';
import Button from './UI/Button';
import { Auth, Hub } from 'aws-amplify';
import Container from './UI/Container';
import Form from './Auth/Form';
import { ProfileStateType } from '../models';

const Profile: React.FC = () => {
  useEffect(() => {
    checkUser()
    Hub.listen('auth', (data) => {
      const { payload } = data
      if (payload.event === 'signOut') {
        setUser(null)
      }
    })
  }, []);

  const [user, setUser] = useState(null as ProfileStateType);

  const checkUser = async(): Promise<void> => {
    try {
      const data = await Auth.currentUserPoolUser();
      const userInfo = { username: data.username, ...data.attributes, };
      setUser(userInfo)
    } catch (err) { console.log('error: ', err) }
  };

  const signOut = (): void => {
    Auth.signOut()
      .catch(err => console.log('error signing out: ', err))
  };

  return user ? (
      <Container>
        <h1>Profile</h1>
        <h3>Email: {user.email}</h3>
        <Button title="Sign Out" onClick={signOut} />
      </Container>
    ) : 
  <Form setUser={setUser} />;
};

export default Profile;