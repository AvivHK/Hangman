import React, { Component } from 'react';
import './App.css';
import Solution from './Components/Solution'
import Score from './Components/Score'
import Letters from './Components/Letters'

class App extends Component {
  constructor() {
    super();
    this.state = {
      letterStatus: {
        A: false,
        B: false,
        C: false,
        D: false,
        E: true,
        F: false,
        G: false,
        H: false,
        I: false,
        J: false,
        K: false,
        L: false,
        M: false,
        N: false,
        O: false,
        P: false,
        Q: false,
        R: false,
        S: true,
        T: false,
        U: false,
        V: false,
        W: false,
        X: false,
        Y: true,
        Z: false
      },
      solution: {
        word: "Aviv",
        hint: "nothing for now"
      },
      score: 0,
    }
  }

  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

  render() {
    return (
      <div className="App">
        <Score score={this.state.score}/>
        <Letters letterStatus={this.state.letterStatus}/>
        <Solution letterStatus={this.state.letterStatus} solution={this.state.solution}/>
      </div>
    );
  }
}

export default App;
