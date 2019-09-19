import React from 'react'
import './userJoined.scss'
export default class UserJoined extends React.Component {


  render() {
    return (
      <div className="userJoined" >
        <link rel="stylesheet" type="text/css" href="stylesheets/userJoined.scss" />
        <img alt='userPhoto error'
          className="userPhoto"
          src="/user.png"
          width="36px"
        ></img>
        <p>Akshay has Joined</p>

      </div>

    )
  }
}