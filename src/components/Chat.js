import React, { useState, useEffect, useRef } from 'react';
import { db, auth } from '../firebase';
import SendMessage from './Message';
import SignOut from './SignOut';

function Chat() {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection('messages')
      .orderBy('createdAt')
      .limit(50)
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => doc.data()));
      });
    return unsubscribe;
  }, []);

  return (
    <>
      <SignOut />
      <div className="msgs">
        {messages.map(({ id, text, photoURL, uid }) => (
          <div key={id}>
            <div className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage scroll={scroll} />
      <div ref={scroll}></div>
    </>
  );
}

export default Chat;