import React, { Component } from 'react';
import './App.css';


const BUTTON_ACTION = [
  {
    keyCode: 96,
    key: '0',
    keyID: 'zero'
  },

   {
    keyCode: 110,
    key: '.',
    keyID: 'decimal'
  },

   {
    keyCode: 13,
    key: '=',
    keyID: 'equals'
  },
  
  {
    keyCode: 97,
    key: '1',
    keyID: 'one'
  },

  {
    keyCode: 98,
    key: '2',
    keyID: 'two'
  },

  {
    keyCode: 99,
    key: '3',
    keyID: 'three'
  },

  {
    keyCode: 107,
    key: '+',
    keyID: 'add'
  },
  
  {
    keyCode: 100,
    key: '4',
    keyID: 'four'
  },

  {
    keyCode: 101,
    key: '5',
    keyID: 'five'
  },

  {
    keyCode: 102,
    key: '6',
    keyID: 'six'
  },

   {
    keyCode: 109,
    key: '-',
    keyID: 'subtract'
  },
  
  {
    keyCode: 103,
    key: '7',
    keyID: 'seven'
  },

  {
    keyCode: 104,
    key: '8',
    keyID: 'eight'
  },

  {
    keyCode: 105,
    key: '9',
    keyID: 'nine'
  },

  {
    keyCode: 106,
    key: '*',
    keyID: 'multiply'
  },

  

  {
    keyCode: 46,
    key: 'AC',
    keyID: 'delete'
  }, 

  {
    keyCode: 8,
    key: '←',
    keyID: 'backspace'
  },
  
  {
    keyCode: 111,
    key: '/',
    keyID: 'divide'
  }
];


let display = 0;
let previous = 0;

class Buttons extends React.Component {  
  constructor(props){
    super(props);
    this.state = {
      initialDisplay: '0',
      currentDisplay: '0',
      previousSolution: '0'
    };
  }
    
 handleKeyPress = (e) => {
    if (e.keyCode === this.props.keyCode) { 
      console.log('im listening');
      console.log(this.props.value);
      this.setState({
        currentDisplay: this.state.initialDisplay + this.state.currentDisplay 
      });
      display = this.state.currentDisplay;
    } else {
      display = 42;
    }
  }
   
 componentDidMount() {
  document.addEventListener('keydown', this.handleKeyPress);
}
componentWillUnmount() {
  document.removeEventListener('keydown', this.handleKeyPress);
}
 
  
  
  render() {
    return (
      <div>
        <button 
          className='button'
          id={this.props.id}
          key={this.props.key}
          onClick={this.handleKeyPress}
        >
          {this.props.value}
        </button>
      </div>
    );
  }
}


class Display extends React.Component {
 
  render() {
    return (
      <span id='display'>
        <h5>{previous}</h5>
       <h2>{display}</h2>
      </span>
    );
  }
}

class Calculator extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentVal: '0',
      prevVal: '0',
      formula: '',
      lastClicked: '' 
    };
  }
  
  render() {
    return (
      <div className='calculator'>
       <h1 className='header'> js calculator </h1>
        <Display />
         {BUTTON_ACTION.map((item) => {
          return <Buttons 
            id={item.keyID}
            value={item.key}
            keyCode={item.keyCode}
            /> 
           })
         }
      </div>
    );
  }
}

function App() {
  return (
    <div className='App'>
      <Calculator />
      <footer id='footer'>
            <p>lth {new Date().getFullYear()}</p>
          </footer>
    </div>
  );
}

export default App;