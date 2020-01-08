// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component {

    constructor() {
        super();
        this.state = {
            timesClicked: 0
        }
    }

    handleClick = () => {
        // this.setState(previousState => {
        //     return {
        //     timesClicked: previousState.timesClicked + 1
        //     }
        // })
        let newClick = this.state.timesClicked + 1
        this.setState({
            timesClicked: newClick
        })
    }

    render() {
        return(
            <div>
                <label htmlFor="timesClickedButton"></label>
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        )
    }
}

export default DigitalClicker