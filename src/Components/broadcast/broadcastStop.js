import React from 'react'
import './broadcastStart.scss'

export default class Broadcast extends React.Component {


  render() {
    return (
      <div className="broadcast" >
        <img alt='broadcast photo error'
          className="userPhoto"
          src="/broadcast.png"
          width="36px"
        ></img>
        <p>Broadcast Stopped</p>

      </div>

    )
  }
}