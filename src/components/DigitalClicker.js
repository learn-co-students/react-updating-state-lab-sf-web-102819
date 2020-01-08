// Code DigitalClicker Component Here
import React, { Component } from 'react'

class DigitalClicker extends Component {
  constructor(props) {
    super();
    this.state = {
      timesClicked: 0
    }
  }

  onClickHandler = () => {
    this.setState((prevState) => ({
      timesClicked: prevState.timesClicked + 1
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.onClickHandler}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

export default DigitalClicker
