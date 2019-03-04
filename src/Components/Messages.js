import React, { Component } from 'react'
import { Feed, Icon } from 'semantic-ui-react'

class Messages extends Component {

  constructor(props) {

    super(props)

    this.state = {
      inMessages: []
    }

    this.avatarSrc = `https://robohash.org/${Math.random()}`

    this.props.socket.on('chat message', (msg) => {
      this.setState({ inMessages: [...this.state.inMessages, msg] })
    })
  }

  currMessages = () => {
    return (
      <div>
        <ul>
          {this.state.inMessages.map((msg, index) => {
            return (
              <li key={index}>
                <Feed>
                  <Feed.Event>
                    <Feed.Label>
                      <img src={this.avatarSrc} />
                    </Feed.Label>
                    <Feed.Content>
                      <Feed.Summary>
                        {/* user name here */}
                        <Feed.User>Test user 1</Feed.User>
                        {/* Put message time here */}
                        {/* <Feed.Date>1 Hour Ago</Feed.Date> */}
                      </Feed.Summary>
                    <Feed.Extra>
                      {msg}
                    </Feed.Extra>
                    </Feed.Content>
                  </Feed.Event>
                </Feed>
              </li>
            )
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