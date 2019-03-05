import React, { Component } from 'react'
import { Input, Button, Grid } from 'semantic-ui-react'

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
      <Grid centered>
      <form  action="" onSubmit={this.onUserSubmit}>
        <Input id='userbox' size='big' action={<Button icon='address card' onClick={this.onUserSubmit} />} onChange={this.onChange} value={this.state.userName}  placeholder='Username' />
      </form>
      </Grid>
      </>
    )
  }
}

export default UserBox