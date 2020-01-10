// Code DigitalClicker Component Here
import React, { Component } from "react";

class DigitalClicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
        timesClicked: 0
    }
  }

  handleIncrementClick = e => {
      this.setState(prevState => {
          return {
            timesClicked: prevState.timesClicked + 1
          }
      })
  }

  render() {
    return <div>
        <h2>from DigitalClicker:</h2>
        {/* <h2>{this.state.timesClicked}</h2> */}
        <button onClick={this.handleIncrementClick}>{this.state.timesClicked}</button>
    </div>;
  }
}

export default DigitalClicker;
