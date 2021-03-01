import React from 'react';
import Auth , { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';

const OAuthContainer: React.FC = () => {
  return(
    <div style={styles.oauthForm}>
      <GoogleLoginButton
        style={styles.socialButtons}
        onClick={() => Auth.federatedSignIn({
          provider: CognitoHostedUIIdentityProvider.Google
        })} 
      />
      <FacebookLoginButton
        style={styles.socialButtons}
        onClick={() => Auth.federatedSignIn({
          provider: CognitoHostedUIIdentityProvider.Facebook
        })}
      />
    </div>
  )
}

export default OAuthContainer;

const styles: {
  oauthForm: React.CSSProperties;
  socialButtons: React.CSSProperties;
} = {
  oauthForm: {
    width: '100%',
    marginTop: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  socialButtons: {
    fontSize: '12px',
    cursor: 'pointer',
    width: '50%',
    height: '90%'
  }
};
