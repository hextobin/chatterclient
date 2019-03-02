import React, { Component } from 'react'
// import logo from './logo.svg'
// import './App.css'
import io from 'socket.io-client'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      message: '',
      inMessages: [],
    }
    this.socket = io('localhost:3000')

    this.socket.on('chat message', (msg) => {
      this.setState({ inMessages: [...this.state.inMessages, msg] })
    })

    this.submit = (e) => {
      e.preventDefault()
      this.socket.emit('chat message', this.state.message)
      this.setState({ message: '' })
    }
  }

  onChange = (e) => {
    this.setState({ message: e.target.value})
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

        <form action='' onSubmit={this.submit}>
          <input id='m' onChange={this.onChange} value={this.state.message}/><button>Send</button>
        </form>
      </div>
    )
  }
}

export default App
