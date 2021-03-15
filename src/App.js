import React, { Component } from 'react';
import './App.css';

class KeypadComponent extends React.Component {
  render() {
    return (
      <div className='calculator' id='container'>
      <div className='button'>
        <span id='display'>{this.props.result}</span>
        
        <br />
        
        <button 
          id='←'
          name='←' 
          onClick={e => this.props.onClick(e.target.name)}>
          ←
        </button>
        
        <button 
          id='clear' 
          name='AC' 
          onClick={e => this.props.onClick(e.target.name)}>
          AC
        </button>
        
        <button 
          id='divide' 
          name='/' 
          onClick={e => this.props.onClick(e.target.name)}>
          /
        </button>
        
        <br/>

        <button 
          id='seven' 
          name='7' 
          onClick={e => this.props.onClick(e.target.name)}>
          7
        </button>
        
        <button 
          id='eight'
          name='8' 
          onClick={e => this.props.onClick(e.target.name)}>
          8
        </button> 
        
        <button 
          id='nine' 
          name='9' 
          onClick={e => this.props.onClick(e.target.name)}>
          9
        </button>
        
        <button 
          id='multiply' 
          name='*' 
          onClick={e => this.props.onClick(e.target.name)}>
          *
        </button>
        
        <br/>

        <button 
          id='four'
          name='4'
          onClick={e => 
      this.props.onClick(e.target.name)}>
          4
        </button>
        
        <button 
          id='five' 
          name='5' 
          onClick={e => this.props.onClick(e.target.name)}>
          5
        </button>
        
        <button 
          id='six' 
          name='6' 
          onClick={e => this.props.onClick(e.target.name)}>
          6
        </button>
        
        <button 
          id='subtract' 
          name='-' 
          onClick={e => this.props.onClick(e.target.name)}>
          -
        </button>
        
        <br/>

        <button 
          id='one' 
          name='1' 
          onClick={e => this.props.onClick(e.target.name)}>
          1
        </button>
        
        <button 
          id='two' 
          name='2' 
          onClick={e => this.props.onClick(e.target.name)}>
          2
        </button>
        
        <button 
          id='three' 
          name='3' 
          onClick={e => this.props.onClick(e.target.name)}>
          3
        </button>
        
        <button 
          id='add' 
          name='+' 
          onClick={e => this.props.onClick(e.target.name)}>
          +
        </button>
        
        <br/>

        <button 
          id='zero' 
          name='0' 
          onClick={e => this.props.onClick(e.target.name)}>
          0
        </button>
        
        <button 
          id='decimal' 
          name='.' 
          onClick={e => this.props.onClick(e.target.name)}>
          .
        </button>
        
        <button 
          id='equals' 
          name='=' 
          onClick={e => this.props.onClick(e.target.name)}>
          =
        </button>
        
        <p id='text'>tiny js calculator</p>
      </div>
      </div>
    );
  }
}   


class App extends React.Component{
  constructor() {
    super();
    this.state = {
      result:  '0',
      decimalCheck: true
    };
  }
  
  onClick = (key) => {
    const operator = ['+', '-', '*', '/'];
    if (key === '=') {
      this.calculate();
    } else if (key ==='←'){
      this.setState({
        result: this.state.result.slice(0, -1) 
      });
    } else if (key === 'AC') {
      this.clear();
    } else if (key === '.') {
        if (this.state.decimalCheck) {
          this.setState({
            result: this.state.result === '0' ? key : this.state.result + key,
            decimalCheck: false
          });
        }
    } else{
      if (operator.includes(key)) {
        let now = this.state.result[this.state.result.length -1];
        let then = this.state.result[this.state.result.length -2];
        let so = this.state.result;
        if (key != '-') {
          if (now == '-' && operator.includes(then)) {
            so = this.state.result.slice(0, -1);
            so = so.slice(0, -1);
          } else if (operator.includes(now)) {
            so = this.state.result.slice(0, -1);
          }
        }
        this.setState({
          result: this.state.result === '0' ? key : so + key,
          decimalCheck: true
        });
      } else {
        this.setState({
          result: this.state.result ==='0' ? key : this.state.result + key
        });
      }
    }
  };
  
  
  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || '0') + ''
      });
    } catch (e) {
      this.setState({
        result: 'error'
      });
    }
  }
  
  clear = () => {
    this.setState({
      result:'0',
      decimalCheck: true
    });  
  }; 
  
  render() { 
   return <KeypadComponent result={this.state.result} onClick={this.onClick} />;
    }
  }
  
export default App;