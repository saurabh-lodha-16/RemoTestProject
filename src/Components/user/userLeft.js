import React from 'react'
import './userLeft.scss'
export default class UserLeft extends React.Component {


  render() {
    return (
      <div className="userJoined" >
        <link rel="stylesheet" type="text/css" href="stylesheets/userJoined.scss" />
        <img alt='userPhoto error'
          className="userPhoto"
          src="/user.png"
          width="36px"
        ></img>
       <p>Akshay has Left</p>

      </div>

    )
  }
}