import React from 'react'
import './othersIssue.scss'

export default class Broadcast extends React.Component {


  render() {
    return (
      <div className="otherConnection" >
        <img alt='userPhoto error'
          className="userPhoto"
          src="/connection-issue.svg"
        ></img>
       <p> Other's Connection Issue </p>

      </div>
    )
  }
}