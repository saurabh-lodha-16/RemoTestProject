import React from 'react'
import './othersIssue.scss'
export default class OtherWebcamIssue extends React.Component{
  render(){
    return(
    	<div className="otherwebcamIssue" >
        <img alt='userPhoto error'
          className="userPhoto"
          src="/webcam-issue.svg"
        ></img>
       {/* <p>Other's Webcam Issue</p> */}

      </div>
    )
  }
}