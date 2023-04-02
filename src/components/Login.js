import React from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { auth } from '../firebase.js'
import { Button } from '@material-ui/core'

function Login() {
    function signInWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  
    const googleLogoUrl = 'https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg';
    const backgroundImageUrl = 'https://images5.alphacoders.com/495/495521.jpg';
  
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          height: '100vh',
          alignItems: 'center',
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
        }}
      >
        <Button
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '30px',
            fontSize: '20px',
            borderRadius: '50px',
            fontWeight: '600',
            backgroundColor: 'black',
            border: 'none',
          }}
          onClick={signInWithGoogle}
        >
          <img
            src={googleLogoUrl}
            alt="Google logo"
            style={{ height: '50px', width: '50px', marginRight: '5px'}}
          />
          <span style={{ color: 'white' }}>Sign In</span>
        </Button>
      </div>
    );
  }
  
  export default Login;
  
  
  
  