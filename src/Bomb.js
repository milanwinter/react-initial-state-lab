// your Bomb code here!
import React, {Component} from 'react'

class Bomb extends Component {

    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }


    render() {
        return (
          this.state.secondsLeft != 0 ?  <p>{this.state.secondsLeft} seconds left before I go boom!</p> : <p>Boom!</p>
        )
    }
}

export default Bomb