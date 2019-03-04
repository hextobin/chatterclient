import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import '../src/App.css'
import io from 'socket.io-client'
import MessageBox from './Components/MessageBox';
import Messages from './Components/Messages'
import UserBox from './Components/UserBox';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      userEnabled: false,
      userName: '',
    }
    
    this.socket = io('localhost:3000')
  }

  enableUser = () => {
    this.setState({ userEnabled: true })
  }

  setUserName = (usr) => {
    this.setState({ userName: usr })
  }

  render() {
    return (
      <div>
        {this.state.userEnabled ? 
        <div hidden></div> : 
        <UserBox setUserName={(usr) => this.setUserName(usr)}  enableUser={() => this.enableUser()}/>
        }
        <Messages socket={this.socket} />
        <MessageBox userEnabled={this.state.userEnabled} socket={this.socket} />
      </div>
    )
  }
}

export default App
