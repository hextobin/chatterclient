import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react'

class MessageBox extends Component {

  state = {
    message: ''
  }

  onMessageSubmit = (e) => {
    e.preventDefault()
    this.props.socket.emit('chat message', this.state.message)
    this.setState({ message: '' })
  }

  onChange = (e) => {
    this.setState({ message: e.target.value})
  } 

  render () { 
    return(
      <>
      <form action="" onSubmit={this.onMessageSubmit}>
        <Input fluid action={<Button icon='chat' onClick={(e) => this.onMessageSubmit(e)} />} onChange={this.onChange} value={this.state.message}  placeholder='Your chatter goes here...' />
      </form>
      </>
    )
  }
}

export default MessageBox