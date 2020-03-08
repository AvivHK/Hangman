import React, { Component } from 'react';

class Score extends Component {
    render() {
        const guessLeft = 8
        return (<div>
            <div>Guesses Left: {guessLeft}</div>
            <div >Score: {this.props.score}</div>
        </div>);
    }
}
export default Score