import React from 'react'
import './userLeft.scss'
export default class UserLeft extends React.Component {


  render() {
    return (
      <div className="userLeft" >
        <img alt='userPhoto error'
          className="userPhoto"
          src="/joined-left.svg"
        ></img>
       <p>User has Left</p>

      </div>

    )
  }
}