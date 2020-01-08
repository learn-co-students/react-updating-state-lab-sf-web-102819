// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

class YouTubeDebugger extends Component {
  constructor(props) {
    super();
    this.state = {
      errors: [],
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p"
        },
      },
      user: null
    }
  }

  onBitrateClickHandler = (e) => {
    // console.log(this.state.settings.bitrate);
    this.setState((prevState) => ({
      settings: {...prevState.settings,
        bitrate: 12}
    }));
  }

  onResClickHandler = (e) => {
    // console.log(this.state.settings.bitrate);
    this.setState((prevState) => ({
      settings: {...prevState.settings,
        video: {
          resolution: "720p"
        }}
    }));
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.onBitrateClickHandler}>{this.state.settings.bitrate}</button>
        <button className="resolution" onClick={this.onResClickHandler}>{this.state.settings.video.resolution}</button>
      </div>
    )
  }
}

export default YouTubeDebugger
