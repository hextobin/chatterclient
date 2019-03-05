import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import UserBox from '../Components/UserBox'
import UserList from './UserList';

class ControlColumn extends Component {

  constructor(props) {
    super(props)

    this.state = {
      users: [],
    }

    this.props.socket.on('join room', (users) => {
      this.setState({ users: users})
    })

    this.props.socket.on('leave room', (users) => {
      this.setState({ users: users})
    })
  }

  render() {
    return (
      <Grid.Column textAlign='center' width={4}>
        <div className='controlcol'>
          {this.props.userEnabled ?
            <UserList users={this.state.users} /> :
            <UserBox setUserName={this.props.setUserName} enableUser={this.props.enableUser} />
          }
        </div>
      </Grid.Column>
    )
  }
}

export default ControlColumn