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

    this.props.socket.on('typing', (username) => {
      const index1 = this.state.users.findIndex(user => user.name === username)
      let newUserObj1 = this.state.users[index1]
      newUserObj1['typing'] = true
      let newUsersArray1 = this.state.users
      newUsersArray1[index1] = newUserObj1
      this.setState({ users: newUsersArray1}, () => {
        setTimeout(() => {
          const index2 = this.state.users.findIndex(user => user.name === username)
          let newUserObj2 = this.state.users[index2]
          newUserObj2['typing'] = false
          let newUsersArray2 = this.state.users
          newUsersArray2[index2] = newUserObj2
          this.setState({ users: newUsersArray2})
        }, 2500)
      })


    })
  }

  render() {
    return (
      <Grid.Column textAlign='center' width={4}>
        <div className='controlcol'>
          {this.props.userEnabled ?
            <UserList socket={this.props.socket}  users={this.state.users} /> :
            <UserBox setUserName={this.props.setUserName} enableUser={this.props.enableUser} />
          }
        </div>
      </Grid.Column>
    )
  }
}

export default ControlColumn