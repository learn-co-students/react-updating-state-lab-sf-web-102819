// Code YouTubeDebugger Component Here
import React, {Component} from 'react' 

class YouTubeDebugger extends Component {
    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          
        }
    }

    handleClick =(event)=>{
        this.setState({
            settings: { ...this.state.settings, ...{bitrate: 12 },}
          })
        
    }

    changeResolution = (event)=> {
        this.setState(previousState =>({
            ...previousState, 
            settings: {
                ...previousState.settings,
                video: {
                    ...previousState.settings.video, resolution: '720p'
                }
            }
        })
        ) }
    render(){
        return(
            <div>
                <button className="bitrate" onClick={this.handleClick}>bitrate</button>
                <button className="resolution" onClick={this.changeResolution}>resolution</button>
            </div>
        )
    }
}

export default YouTubeDebugger