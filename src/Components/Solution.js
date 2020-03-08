import React, {Component} from 'react';
import Letter from './Letter';

class Solution  extends Component {
    render(){
        const word = "BYETS"
        const temp = word.split("")
        return(<div>
            <div id="hint"><em>{this.props.solution.hint}</em></div>
            <div>Available letters:</div>
            <div>{temp.map(l => this.props.letterStatus[l] ? <Letter letter={l}/> : <Letter letter= "_ " key={l}/>  )}</div>
        </div>);
    }
}
export default Solution












//{Object.entries(this.props.letterStatus).map(([l,bool])