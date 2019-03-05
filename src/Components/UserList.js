import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'

class UserList extends Component {

  userList = () => {
    console.log('testing')
    return (
      this.props.users.map((user, index) => {
        return (
          <Card>
            <div className='user-list-name-align'>
              <Image src={`https://robohash.org/${user['name']}?size=200x200`} style={{ 'font-size': 42 }} alt="avatar image" avatar />
              <span id='user-list-name'>{user['name']}</span>
            </div>
            <Card.Header>
              {/* {user.name} */}
            </Card.Header>
          </Card>
        )
      })
    )
  }
  
  render() {
    return(
      <>
        Current Users
        {this.userList()}
      </>
    )
  }
}

export default UserList