import React from 'react'
import './myIssue.scss'

export default class Broadcast extends React.Component {


  render() {
    return (
      <div className="myConnection" >
        <img alt='userPhoto error'
          className="userPhoto"
          src="/connection-issue.svg"
        ></img>
       <p> My Connection Issue </p>

      </div>
    )
  }
}