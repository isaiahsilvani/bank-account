import { Socket } from 'net';
import React, { useEffect, useRef } from 'react';
import { io } from 'socket.io-client'


function App() {
    
  let socket = io("http://localhost:1337")

  const sendMsg = () => {
    socket.emit("msg", {data: "This a message"})
    console.log('sendmsg hit')
  }

  useEffect(() => {
    socket.on("recieveMsg", ({ data }) => {
      console.log('data recieved: ', data)
    })
  }, []);

  return (
    <div className="App">
      <button onClick={sendMsg}>Send Response</button>
    </div>
  );
}

export default App;
