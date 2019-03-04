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
      <form id='messagebox'  action="" onSubmit={this.onMessageSubmit}>
        <Input disabled={!this.props.userEnabled}  fluid action={<Button icon='chat' onClick={this.onMessageSubmit} />} onChange={this.onChange} value={this.state.message}  placeholder='Your chatter goes here...' />
      </form>
      </>
    )
  }
}

export default MessageBox