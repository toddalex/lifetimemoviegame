import React, { ReactNode } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import ProgressBar from './ProgressBar';
import { ValidationState } from '../../models';

const Container: React.FC<ReactNode> = ({ children }) => (
  <div style={styles.container}>
    { children }
    <ProgressBar />
  </div>
);

export default Container;

const styles: {
  container: React.CSSProperties;
} = {
  container: {
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 150,
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px'
  }
};
