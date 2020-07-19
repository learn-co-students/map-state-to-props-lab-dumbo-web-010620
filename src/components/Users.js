import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    let users = this.props.users.map ( (user, index) => 
    <li key={index}>{user.username}</li>)
    return (
      <div>
        {this.props.numberOfUsers}
        <ul>
          {users}
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users currently in the store */}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = state => {
  return {
    users: state.users,
    numberOfUsers: state.users.length
  }
}

/*
oh oh, I think this is just taking the mapStateToProps function definition above 
and the React/class component Users, and in one single line of code, AKA
export default connect(mapStateToProps)(Users):

1) uses connect keyword to pull state from the redux store
2) uses mapStateToProps to structure state as a local (i.e., for this 
component, Users) simplified object, and sets this.props to be that object
3) clones and transforms Users into this new connected/polymerized react-redux component and exports it
*/ 

// connect this component to Redux
export default connect(mapStateToProps)(Users)

