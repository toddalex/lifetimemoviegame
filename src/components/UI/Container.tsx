import React, { ReactNode } from 'react';

const Container: React.FC<ReactNode> = ({ children }) => (
  <div style={styles.container}>
    { children }
  </div>
);

const styles: {
  container: React.CSSProperties;
} = {
  container: {
    margin: '0 auto',
    padding: '50px 100px',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 150,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default Container;