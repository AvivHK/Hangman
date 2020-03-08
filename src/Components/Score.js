import React, {Component} from 'react';

class Score  extends Component {
    render(){
        const guessLeft = 8
        return(<div>
            Guesses Left: {guessLeft}
        </div>);
    }
}
export default Score