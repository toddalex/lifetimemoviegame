import React from 'react';
import Profile from './Profile';

const App: React.FC = () => {
  return (
    <div className="App" style={styles}>
      <Profile />
    </div>
  );
};

export default App;

const styles: React.CSSProperties = {
  margin: '0 auto',
  padding: '1rem',
  width: '35%'
};
