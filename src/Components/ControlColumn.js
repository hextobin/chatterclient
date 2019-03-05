import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import UserBox from '../Components/UserBox'

class ControlColumn extends Component {
  render() {
    return (
      <Grid.Column textAlign='center' width={4}>
        <div className='controlcol'>
          {this.props.userEnabled ?
            <div hidden></div> :
            <UserBox setUserName={this.props.setUserName} enableUser={this.props.enableUser} />
          }
        </div>
      </Grid.Column>
    )
  }
}

export default ControlColumn