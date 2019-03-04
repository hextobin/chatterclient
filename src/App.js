import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import '../src/App.css'
import io from 'socket.io-client'
import MessageBox from './Components/MessageBox';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      inMessages: [],
    }

    this.socket = io('localhost:3000')
    
    this.socket.on('chat message', (msg) => {
      this.setState({ inMessages: [...this.state.inMessages, msg] })
    })
  }
  
  currMessages = () => {
    return (
      <div>
        <ul>
          {this.state.inMessages.map((msg, index) => {
            return <li key={index}>{msg}</li>
          })}
        </ul>
      </div>
    )
  }

  render () {
    return (
      <div>
        {this.state.inMessages.length === 0 ? 
          <div>No Messages</div> :
          this.currMessages() 
        }
        <MessageBox socket={this.socket} />
      </div>
    )
  }
}

export default App
