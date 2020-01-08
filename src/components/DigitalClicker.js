// Code DigitalClicker Component Here
import React, {Component} from 'react'

class DigitalClicker extends Component{
    constructor(){
        super()
        this.state = {
            timesClicked: 0
        }
    }

    handleClick =(event)=>{
       let num = this.state.timesClicked + 1
       this.setState({timesClicked: num}) 
     
    }

    render(){
        return(
            <div>
                <label value={this.state.timesClicked} >{this.state.timesClicked}</label>
    <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        )
    }
}

export default DigitalClicker