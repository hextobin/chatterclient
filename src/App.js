import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import '../src/App.css'
import io from 'socket.io-client'
import MessageBox from './Components/MessageBox';
import Messages from './Components/Messages'

const App = () => {

  const socket = io('localhost:3000')

    return (
      <div>
        <Messages socket={socket} />
        <MessageBox socket={socket} />
      </div>
    )
  }
  

export default App
