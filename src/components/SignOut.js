import React from 'react'
import { auth } from '../firebase.js'
import { Button } from '@material-ui/core'

function SignOut() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        position: 'fixed',
        width: '100%',
        backgroundColor: 'transparent',
        top: 0,
        zIndex: '10',
        padding: '10px 0px'
      }}
    >
      <Button
        style={{
          padding: '20px',
          fontSize: '15px',
          borderRadius: '50px',
          fontWeight: '600',
          color: 'white',
          backgroundColor: 'black',
        }}
        onClick={() => auth.signOut()}
      >
        Sign Out
      </Button>
    </div>
  )
}

export default SignOut