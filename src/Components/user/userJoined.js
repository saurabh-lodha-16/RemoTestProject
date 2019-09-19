import React from 'react'
import './userJoined.scss'
export default class UserJoined extends React.Component {


  render() {
    return (
      <div className="userJoined" >
        <img alt='userPhoto error'
          className="userPhoto"
          src="/joined-user.svg"
        ></img>
        <p>Akshay has Joined</p>

      </div>

    )
  }
}
