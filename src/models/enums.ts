export enum InputName {
  Username = 'username',
  Password = 'password',
  ConfirmationCode = 'confirmationCode',
};

export enum InputLabel {
  Email = 'Email',
  Password = 'Password',
  ConfirmationCode = 'Confirmation Code',
};

export enum FormType {
  SignIn = 'signIn',
  SignUp = 'signUp',
  ConfirmSignUp = 'confirmSignUp',
  ForgotPassword = 'forgotPassword',
  ForgotPasswordSubmit = 'forgotPasswordSubmit',
  Loading = 'loading',
};

export enum ButtonType {
  SignIn = 'Sign In',
  SignUp = 'Sign Up',
  ConfirmSignUp = 'Confirm Sign Up',
  ForgotPassword = 'Reset password',
  ForgotPasswordSubmit = 'Save new password',
  SignOut = 'Sign Out',
};

export enum ErrorCode {
  IncorrectPassword = 'NotAuthorizedException',
  NoUser = 'UserNotFoundException',
  InvalidCode = 'CodeMismatchException',
  UsernameExists = 'UsernameExistsException',
  EmptyUsername = 'EmptyUsername',
  EmptyPassword = 'InvalidParameterException'
};

export enum ErrorMessage {
  IncorrectPassword = 'Incorrect password.',
  NoUser = 'User not found.',
  InvalidCode = 'Invalid code.',
  UsernameExists = 'User already exists.',
  EmptyUsername = 'Please enter an email.',
  EmptyPassword = 'Please enter a password.'
}