import React from 'react';
const BUTTON_ACTION = [
  {
    keyCode: 96,
    key: '0',
    keyID: 'zero'
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
    keyCode: 107,
    key: '+',
    keyID: 'add'
  },

  {
    keyCode: 109,
    key: '-',
    keyID: 'subtract'
  },

  {
    keyCode: 110,
    key: '.',
    keyID: 'decimal'
  },

  {
    keyCode: 111,
    key: '/',
    keyID: 'divide'
  },
  
  {
    keyCode: 13,
    key: '=',
    keyID: 'equals'
  },

  {
    keyCode: 46,
    key: 'AC',
    keyID: 'delete'
  }
];

class Buttons extends React.Component {
  
  render() {
    return (
      <div>
        <button 
          className='button'
          id={this.props.id}
        >
          {this.props.value}
        </button>
      </div>
    );
  }
}

class Display extends React.Component {
   constructor(props){
    super(props);
    this.state = {
      initialDisplay: '0',
      previousSolution: '0'
    };
  }
    
 handleKeyPress = (e) => {
    if (e.keyCode === this.props.keyCode) { 
        this.setState({
          initialDisplay: (this.props.keyID)
        });
    }
  }
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  
  render() {
    return (
      <span id='display'>
       <h2>{this.state.initialDisplay}</h2>
      </span>
    );
  }
}

class Calculator extends React.Component {
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
    </div>
  );
}

export default App;
