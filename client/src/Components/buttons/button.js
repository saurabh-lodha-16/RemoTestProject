import React from 'react'
import Button from '@material-ui/core/Button'
import UserJoined from '../user/joined/userJoined';
import './leftButton.scss';
import BroadcastStart from '../broadcast/start/broadcastStart';
import BroadcastStop from '../broadcast/stop/broadcastStop';
import MyWebcamIssue from '../webcam/myIssue/myIssue';
import OtherWebcamIssue from '../webcam/otherIssue/othersIssue';
import MyConnIssue from '../connection/myIssue/myIssue';
import OtherConnIssue from '../connection/otherIssue/othersIssue';
import UserLeft from '../user/left/userLeft';



export default class Buttons extends React.Component {
  constructor() {
    super();

    this.state = {
      showNotification: false
    };
  }

  myConnIssue = () => {
    this.setState({
      myConnIssue: !this.state.myConnIssue
    })
  }
  otherConnIssue = () => {
    this.setState({
      otherConnIssue: !this.state.otherConnIssue
    })
  }
  webcam() {
    this.setState({
      webcam: !this.state.webcam
    });
  }
  otherWebcam() {
    this.setState({
      otherWebcam: !this.state.otherWebcam
    });
  }
  userJoined() {
    this.setState({
      userJoined: !this.state.userJoined
    });
  }

  userLeft = () => {
    this.setState({
      userLeft: !this.state.userLeft
    });
  }

  userConnection = () => {
    this.setState({
      userConnection: !this.state.userConnection
    });
  }

  broadcastStart = () => {
    this.setState({
      broadcastStart: !this.state.broadcastStart
    });
  }

  broadcastStop = () => {
    this.setState({
      broadcastStop: !this.state.broadcastStop
    });
  }



  render() {
    return (
      <div className="" >
        <br></br>
        <div className="leftButton">
        <Button variant="contained" color="primary" className='btn btn-info ml-1'
          onClick={this.userJoined.bind(this)}>User Joined
        </Button>
        <Button variant="contained" color="primary" className='btn btn-info'
          onClick={this.userLeft.bind(this)}>User Left
        </Button>
        <Button variant="contained" color="primary" className='btn btn-info'
          onClick={this.broadcastStart.bind(this)}>Broadcast Started
        </Button>
        <Button variant="contained" color="primary" className='btn btn-info'
          onClick={this.broadcastStop.bind(this)}>Broadcast Stopped
        </Button>
        <Button variant="contained" color="primary" className='btn btn-info'
          onClick={this.myConnIssue.bind(this)}>My Connection Issue
        </Button>
        <Button variant="contained" color="primary" className='btn btn-info'
          onClick={this.otherConnIssue.bind(this)}>Other Connection Issue
        </Button>
        <Button variant="contained" color="primary" className='btn btn-info'
          onClick={this.webcam.bind(this)}>My Webcam Issue
        </Button>
        <Button variant="contained" color="primary" className='btn btn-info'
          onClick={this.otherWebcam.bind(this)}>Other Webcam Issue
        </Button>
        </div>

        {this.state.userJoined ? (
          <UserJoined />
        ) : null}
        {this.state.userLeft ? (
          <UserLeft />
        ) : null}
        {this.state.broadcastStart ? (
          <BroadcastStart />
        ) : null}
        {this.state.broadcastStop ? (
          <BroadcastStop />
        ) : null}
        {this.state.webcam ? (
          <MyWebcamIssue/>
        ) : null}
        {this.state.otherWebcam ? (
          <OtherWebcamIssue />
        ) : null}
        {this.state.myConnIssue ? (
          <MyConnIssue />
        ) : null}
        {this.state.otherConnIssue ? (
          <OtherConnIssue />
        ) : null}
      </div>
    )
  }
}