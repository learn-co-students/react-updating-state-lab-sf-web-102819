// Code DigitalClicker Component Here
import React, { Component } from 'react'

export class DigitalClicker extends Component {
    constructor(){
        super()
        this.state = {
            timesClicked: 0
        }
    }

    increment = () => {
        let newNumber = this.state.timesClicked + 1 
        this.setState({
            timesClicked: newNumber
        })
    }

    render() {
        return (
            <button onClick = {this.increment}>{this.state.timesClicked}</button>
        )
    }
}

export default DigitalClicker
