import React from 'react';

const BUTTON_ACTION = [
  {
    keyCode: 96,
    key: '0',
    keyID: 'NumPad0'
  },

  {
    keyCode: 97,
    key: '1',
    keyID: 'NumPad1'
  },

  {
    keyCode: 98,
    key: '2',
    keyID: 'NumPad2'
  },

  {
    keyCode: 99,
    key: '3',
    keyID: 'NumPad3'
  },

  {
    keyCode: 100,
    key: '4',
    keyID: 'NumPad4'
  },

  {
    keyCode: 101,
    key: '5',
    keyID: 'NumPad5'
  },

  {
    keyCode: 102,
    key: '6',
    keyID: 'NumPad6'
  },

  {
    keyCode: 103,
    key: '7',
    keyID: 'NumPad7'
  },

  {
    keyCode: 104,
    key: '8',
    keyID: 'NumPad8'
  },

  {
    keyCode: 105,
    key: '9',
    keyID: 'NumPad9'
  },

  {
    keyCode: 106,
    key: '*',
    keyID: 'NumpadMultiply'
  },

  {
    keyCode: 107,
    key: '+',
    keyID: 'NumpadAdd'
  },

  {
    keyCode: 109,
    key: '-',
    keyID: 'NumpadSubtract'
  },

  {
    keyCode: 110,
    key: '.',
    keyID: 'NumpadDecimal'
  },

  {
    keyCode: 111,
    key: '/',
    keyID: 'NumpadDivide'
  },
  
  {
    keyCode: 13,
    key: 'Enter',
    keyID: 'NumpadEnter'
  }
];

class Buttons extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      initialDisplay: '0',
      previousSolution: '0'
    };
  }
  render() {
    return (
      <div>
        //button.type
      </div>
    );
  }
}

class Display extends React.Component {
  render() {
    return (
      <span>
        //tbd
      </span>
    );
  }
}

class Calculator extends React.Component {
  render() {
    return (
      <div>
        js calculator
        <Display />
        <Buttons/>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;
