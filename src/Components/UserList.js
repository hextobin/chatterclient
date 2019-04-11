import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'

class UserList extends Component {


  userList = () => {
    return (
      this.props.users.map((user, index) => {
        return (
          <Card key={user['id'].replace(/[_]/g, "")}>
            <div className='user-list-name-align'>
              <Image src={`https://robohash.org/${user['name']}?size=200x200`} style={{ 'fontSize': 42 }} alt="avatar image" avatar />
              <span id='user-list-name'>{user['name']}</span>
            </div>
            <Card.Header>
              {user['typing'] === true ? <div className='typing'>is typing</div> : <div hidden={true}></div>}
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