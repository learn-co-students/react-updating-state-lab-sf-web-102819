// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {

    constructor () {
        super();
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

    changeBitrate = (event) => {
        // event.persist();
        this.setState({
            settings: {...this.state.settings, bitrate: 12}
            })
        }
    

    changeVideoResolution = (event) => {
        this.setState(previousState => ({
                ...previousState, 
                settings: {
                    ...previousState.settings,
                    video: {
                        ...previousState.settings.video, resolution: '720p'
                    }
                }
            })
        )}


    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.changeBitrate}>Bitrate</button>
                <button className="resolution" onClick={this.changeVideoResolution}>Video Resolution</button>
            </div>
        )
    }
}

export default YouTubeDebugger