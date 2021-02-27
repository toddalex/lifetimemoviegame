import React, { useState, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Button from './UI/Button';
import { Auth, Hub } from 'aws-amplify';
import Container from './UI/Container';
import Form from './Auth/Form';
import * as actions from '../store/actions';
import { AuthFormState, User } from '../models';
import { AuthActionTypes } from '../constants';

const mapStateToProps = (state: {auth: AuthFormState}) => ({
  user: state.auth.user
});

const mapDispatchToProps = (dispatch: (func: AuthActionTypes)=> void) => ({
  updateUser: (payload: User | null) => dispatch(actions.updateUser(payload))
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type ProfileProps = ConnectedProps<typeof connector>;

const Profile: React.FC<ProfileProps> = ({
  user,
  updateUser
}) => {
  useEffect(() => {
    checkUser()
    Hub.listen('auth', (data) => {
      const { payload } = data
      if (payload.event === 'signOut') {
        updateUser(null);
      }
    })
  }, []);

  const checkUser = async(): Promise<void> => {
    try {
      const data = await Auth.currentUserPoolUser();
      const userInfo: User = { username: data.username, ...data.attributes, };
      updateUser(userInfo);
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
  <Form />;
};

export default connector(Profile);