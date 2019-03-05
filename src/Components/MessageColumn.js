import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import Messages from './Messages'
import MessageBox from './MessageBox'

class MessageColumn extends Component {
  render() {
    return (
      <>
        <Grid.Column width={8}>
          <div className='messagecol'>
            <Messages socket={this.props.socket} />
            <MessageBox userName={this.props.userName} userEnabled={this.props.userEnabled} socket={this.props.socket} />
          </div>
        </Grid.Column>
      </>
    )
  }
}

export default MessageColumn