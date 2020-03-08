import React, {Component} from 'react';

class Letter  extends Component {
    render(){
        return(
        this.props.chosen ? <span class="chosen"> {this.props.letter} </span> : <span> {this.props.letter} </span> 
        );
    }
}
export default Letter