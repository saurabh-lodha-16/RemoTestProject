import React from 'react'
import './broadcastStart.scss'

export default class Broadcast extends React.Component {


  render() {
    return (
      <div className="broadcaststart" >
        <img alt='userPhoto error'
          className="userPhoto"
          src="/broadcast-start.svg"
        ></img>
       <p>Broadcast started</p>

      </div>
    )
  }
}