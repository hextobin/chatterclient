import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react'

class UserBox extends Component {

  state = {
    userName: ''
  }

  onUserSubmit = (e) => {
    e.preventDefault()
    this.props.setUserName(this.state.userName)
    this.props.enableUser()
  }

  onChange = (e) => {
    this.setState({ userName: e.target.value})
  }

  render() {
    return(
      <>
      <form  action="" onSubmit={this.onUserSubmit}>
        <Input fluid action={<Button icon='address card' onClick={this.onUserSubmit} />} onChange={this.onChange} value={this.state.userName}  placeholder='Username' />
      </form>
      </>
    )
  }
}

export default UserBox