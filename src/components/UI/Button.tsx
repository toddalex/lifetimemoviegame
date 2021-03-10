import React, { useState, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Button from '@material-ui/core/Button';
import { ValidationState, ButtonType } from '../../models';

interface Props {
  onClick: any;
  title: string;
};

const AuthButton: React.FC<ButtonProps> = ({ 
  onClick, 
  title,
  username,
  password,
  confirmationCode,
}) => {
  const [button, setButton] = useState(true);

  const validateButton = (title: string): void => {
    if (title === ButtonType.SignIn || title === ButtonType.SignUp) {
      username.isValid && password.isValid ? setButton(false) : setButton(true)
    } else if (title === ButtonType.ConfirmSignUp) {
      confirmationCode.isValid ? setButton(false) : setButton(true)
    } else if (title === ButtonType.ForgotPassword) {
      username.isValid ? setButton(false) : setButton(true)
    } else if (title === ButtonType.ForgotPasswordSubmit) {
      confirmationCode.isValid && password.isValid ? setButton(false) : setButton(true)
    } else if (title === ButtonType.SignOut) {
      setButton(false);
    }
  };

  useEffect(() => {
    validateButton(title);
  }, [username, password, confirmationCode]);

  return (
    <Button 
      variant="contained" 
      color="primary" 
      disabled={button} 
      style={styles} 
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

const mapStateToProps = (state: {
  validation: ValidationState
}) => ({
  username: state.validation.username,
  password: state.validation.password,
  confirmationCode: state.validation.confirmationCode,
});

const connector = connect(mapStateToProps);

type ButtonProps = Props & ConnectedProps<typeof connector>;

export default connector(AuthButton);

const styles: React.CSSProperties = {
  margin: '25px 0 15px 0',
};
