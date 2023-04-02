import React, { useState } from 'react';
import { db, auth } from '../firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Input, Button } from '@material-ui/core';

function Message({ scroll }) {
  const [message, setMessage] = useState('');

  async function handleMessageSubmit(event) {
    event.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await db.collection('messages').add({
      text: message,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });

    setMessage('');
    scroll.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div>
      <form onSubmit={handleMessageSubmit}>
        <div className="sendMsg" style={{ backgroundColor: '#0a2540', padding: '15px', display: 'flex', alignItems: 'center' }}>
          <Input
            style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px', color: '#fff' }}
            placeholder="Type a message"
            type="text"
            value={message}
            onChange={event => setMessage(event.target.value)}
          />
          <Button
            style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px', marginTop: '-10px' }}
            type="submit"
            variant="contained"
            color="primary"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Message;