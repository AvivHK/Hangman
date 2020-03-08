import React, { Component } from "react";
import Letter from './Letter'

class componentName extends Component {
  render() {
    return (
      <div>
        <div>Letters left:</div>
        <div>{Object.entries(this.props.letterStatus).map(([l,bool]) => bool ? <Letter letter= {l} chosen={true} key={l} /> : <Letter letter={l} choosen={false} key={l}/>)}</div>
      </div>
    );
  }
}
export default componentName;
