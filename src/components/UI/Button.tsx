import React from 'react';
import Button from '@material-ui/core/Button';

interface ButtonProps {
  onClick: any;
  title: string;
}

const AuthButton: React.FC<ButtonProps> = ({ 
  onClick, 
  title 
}) => {
  return (
    <Button variant="contained" color="primary" disabled={false} style={styles} onClick={onClick}>
      {title}
    </Button>
  );
};

export default AuthButton;

const styles: React.CSSProperties = {
  marginTop: '25px',
};
