import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.component';
import Footer from './Components/Footer.component';
import Calculator from './Components/Calculator.component';

class App extends Component {
  constructor(){
    super();
    this.state = {name: "GBO", age: 20};
  }

  onClick(){
    this.setState({name: "BoB"});
  }

  setage(e){
    const age = e.target.value;
    this.setState({age: age});
  }
  getVal(){
    return "getVal";
  }
  render() {
    const list = [
    <Header />,
    <Header />,
    <Header />
    ];

    const myname = "GBO";
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>{list}</div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
            Test adding text to App.js
        </p>
        <div>
         Hello, {myname}
        </div>
        <div>Calculation 3 + 2 = {3+2}</div>
        <div>Call function {(() => {return 1234})()} </div>
        <div>getVal method;{this.getVal}</div>
        <div>My name is: {this.state.name}</div>
        <div>Age: {this.state.age}</div>
        <button onClick={this.onClick.bind(this)}>Click Me Please</button>
        <input onChange={this.setage.bind(this)} />
        <Header title="Test title" />
        <Header title="another title" />
        <div><Header /></div>
        <div> -------------------------------------------------------------------------- </div>
        <div><Calculator /></div>
        <div> -------------------------------------------------------------------------- </div>
        <div><Footer /></div>

      </div>
    );
  }
}
const fn = (e) => {

}

export default App;
