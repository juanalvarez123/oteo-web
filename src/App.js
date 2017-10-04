import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

	constructor(props) {
    	super(props)
        this.state = { healthcheck: {} }
    }

	componentDidMount() {
      fetch(process.env.REACT_APP_URL_OTEO_REST_API + '/healthcheck')
      .then((response) => {
        return response.json()
      })
      .then((healthcheck) => {
        this.setState({ healthcheck: healthcheck })
      })
	}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Oteo web App</h1>
          <p>{process.env.REACT_APP_URL_OTEO_REST_API}</p>
          <p>{this.state.healthcheck.message}</p>
        </header>
      </div>
    );
  }
}

export default App;
