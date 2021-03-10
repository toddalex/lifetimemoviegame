import React, { useState, useEffect } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Auth, Hub } from 'aws-amplify';

import NavBar from './Nav/Nav';
import Profile from './Profile';
import Form from './Auth/Form';

import { ProfileStateType } from '../models';

const App: React.FC = () => {
  const [user, setUser] = useState(null as ProfileStateType);

  useEffect(() => {
    checkUser();
    Hub.listen('auth', (data) => {
      const { payload } = data
      if (payload.event === 'signOut') {
        setUser(null)
      };
    });
  }, []);

  const checkUser = async(): Promise<void> => {
    try {
      const data = await Auth.currentUserPoolUser();
      const userInfo = { username: data.username, ...data.attributes, };
      setUser(userInfo)
    } catch (err) { 
      console.log('error: ', err) 
    };
  };

  const signOut = (): void => {
    Auth.signOut()
      .catch(err => console.log('error signing out: ', err))
  };

  return (
    <div className="App" >
      <HashRouter>
      <NavBar signOut={signOut} user={user} />
        <Switch>
          { user ? 
            <>
              <Route exact path="/" render={()=><Profile user={user} signOut={signOut} />}/> 
              <Redirect to="/" />
            </>
            : <Route exact path="/auth" render={()=> <Form  setUser={setUser}/>}/>
          }
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;

