// Code DigitalClicker Component Here
import { render } from 'enzyme'
import React from 'react'

class DigitalClicker extends React.Component {
    constructor() {
        super()
    
        this.state = {
            timesClicked: 0
        }
    }
    
    handleClick = () => {
        this.setState(
            oldState => {
                return {
                    timesClicked: oldState.timesClicked + 1
                }
            }
        )
    }
    
    render() {
        return <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    }
}

export default DigitalClicker