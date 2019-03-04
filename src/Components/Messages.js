import React, { Component } from 'react'

class Messages extends Component {

  constructor(props) {

    super(props)

    this.state = {
      inMessages: []
    }

    this.props.socket.on('chat message', (msg) => {
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
      <>
        {this.state.inMessages.length === 0 ? 
          <div>No Messages</div> :
          this.currMessages() 
        }
      </>
    )
  }
}

export default Messages