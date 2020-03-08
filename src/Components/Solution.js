import React, {Component} from 'react';

class Solution  extends Component {
    render(){
        const spacesArray = ['_','_','_','_']
        return(<div>
            {spacesArray.map(l => <span>  { l }  </span>)}
            <div id="hint"><var>HINT HINT HINT</var></div>
        </div>);
    }
}
export default Solution