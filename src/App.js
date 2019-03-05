import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Container, Grid } from 'semantic-ui-react'
import '../src/App.css'
import io from 'socket.io-client'
import MessageBox from './Components/MessageBox';
import Messages from './Components/Messages'
import UserBox from './Components/UserBox';
import ControlColumn from './Components/ControlColumn'
import MessageColumn from './Components/MessageColumn'

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
    this.setState({ userName: usr }, () => {
      this.socket.emit('join room', this.state.userName)
    })
  }

  render() {
    return (
      <>
        <Grid columns='equal'>
          <ControlColumn socket={this.socket} setUserName={this.setUserName} enableUser={this.enableUser} userEnabled={this.state.userEnabled}/>
          <MessageColumn socket={this.socket} userEnabled={this.state.userEnabled} userName={this.state.userName}/>
        </Grid>
      </>
    )
  }
}

export default App
