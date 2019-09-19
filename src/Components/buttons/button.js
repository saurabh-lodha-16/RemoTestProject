import React from 'react'
import Button from '@material-ui/core/Button'
import UserJoined from '../user/userJoined';
import Broadcast from '../broadcast/broadcastStart';
import MyWebcamIssue from '../webcam/myIssue';
import OtherWebcamIssue from '../webcam/othersIssue';
import MyConnIssue from '../connection/myIssue';
import OtherConnIssue from '../connection/othersIssue';
import UserLeft from '../user/userLeft';

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
      <div>
        <br></br>
        <Button variant="contained" color="primary" className='btn btn-info'
          onClick={this.userJoined.bind(this)}>User Joined
        </Button>
        <Button variant="contained" color="primary" className='btn btn-info'
          onClick={this.userLeft.bind(this)}>User Left
        </Button>
        <Button variant="contained" color="primary" className='btn btn-success'
          onClick={this.broadcastStart.bind(this)}>Broadcast Started
        </Button>
        <Button variant="contained" color="primary" className='btn btn-danger'
          onClick={this.broadcastStop.bind(this)}>Broadcast Stopped
        </Button>
        <Button variant="contained" color="primary" className='btn btn-warning'
          onClick={this.myConnIssue.bind(this)}>My Connection Issue
        </Button>
        <Button variant="contained" color="primary" className='btn btn-warning'
          onClick={this.otherConnIssue.bind(this)}>Other Connection Issue
        </Button>
        <Button variant="contained" color="primary" className='btn btn-warning'
          onClick={this.webcam.bind(this)}>My Webcam Issue
        </Button>
        <Button variant="contained" color="primary" className='btn btn-warning'
          onClick={this.otherWebcam.bind(this)}>Other Webcam Issue
        </Button>
        

        {this.state.userJoined ? (
          <UserJoined />
        ) : null}
        {this.state.userLeft ? (
          <UserLeft />
        ) : null}
        {this.state.broadcastStart ? (
          <Broadcast />
        ) : null}
        {this.state.broadcastStop ? (
          <Broadcast />
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