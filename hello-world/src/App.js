import React from 'react';
import logo from './logo.svg';
import logoPlatzi from './platzi.png';
import './App.css';
import CSSTransitionGroup from 'react-addons-css-transition-group';



class App extends React.Component {

  state={
    logo: logo,
    // nombre: 'Leonidas'
  }

  onClick(){
    // debugger
    this.setState(
      { 
        logo: logoPlatzi,
      }
    )
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <CSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}>
            <img
            key={this.state.logo} 
            src={this.state.logo} 
            className="App-logo" 
            alt="logo" />
          </CSSTransitionGroup>
          <h2>Hola mundo.</h2>
          <button onClick={this.onClick.bind(this)}>click me!</button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
}

export default App;
