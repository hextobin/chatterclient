import React, { Component } from 'react'
import { Feed } from 'semantic-ui-react'

class Messages extends Component {

  constructor(props) {

    super(props)

    this.state = {
      inMessages: []
    }

    this.props.socket.on('chat message', (message , userName, timeStamp) => {
      console.log(userName)
      const newMessageObj = { message, userName, timeStamp }
      this.setState({ inMessages: [...this.state.inMessages, newMessageObj] })
    })
  }

  currMessages = () => {
    return (
      <div>
        <ul>
          {this.state.inMessages.map((msgObj, index) => {
            return (
              <li key={index}>
                <Feed>
                  <Feed.Event>
                    <Feed.Label>
                      <img src={`https://robohash.org/${msgObj['userName']}`} alt='robot user avatar'  />
                    </Feed.Label>
                    <Feed.Content>
                      <Feed.Summary>
                        <Feed.User>{msgObj['userName']}</Feed.User>
                        {/* Put message time here */}
                        <Feed.Date> {msgObj['timeStamp']}</Feed.Date>
                      </Feed.Summary>
                    <Feed.Extra>
                      {msgObj['message']}
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