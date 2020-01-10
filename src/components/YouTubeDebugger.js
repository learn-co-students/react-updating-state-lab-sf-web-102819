// Code YouTubeDebugger Component Here
import React, { Component } from "react";

class YouTubeDebugger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p"
        }
      }
    };
  }

  handleBitRate = e => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  };

  handleVideoResolution = e => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
					...this.state.settings.video,
          resolution: "720p"
        }
      }
    });
  };

  render() {
    return (
      <div>
        <h2>from YouTubeDebugger:</h2>
        {/* {this.state.settings.bitrate} */}
		<button className="bitrate" onClick={this.handleBitRate}>{this.state.settings.bitrate}</button>
        <br></br>
		<button className="resolution" onClick={this.handleVideoResolution}>{this.state.settings.video.resolution}</button>
      </div>
    );
  }
}

export default YouTubeDebugger;
