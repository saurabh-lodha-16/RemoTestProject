import React from 'react'
import './myIssue.scss'
export default class MyWebcamIssue extends React.Component{
  render(){
    return(
    	<div className="mywebcamIssue" >
        <img alt='userPhoto error'
          className="userPhoto"
          src="/webcam-issue.svg"
        ></img>
       <p>My Webcam Issue</p>

      </div>
    )
  }
}