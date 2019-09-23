import React from 'react'
import './broadcastStop.scss'

export default class Broadcast extends React.Component {


  render() {
    return (
      <div className="broadcaststop" >
        <img alt='userPhoto error'
          className="userPhoto"
          src="/broadcast-stop.svg"
        ></img>
       <p>Broadcast Stopped</p>

      </div>
    )
  }
}
      