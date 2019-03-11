import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo'; 
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Launches from './components/Launches';
import Launch from './components/Launch';
import './App.css';
import logo from './img/Logo-SpaceX.png';

const client = new ApolloClient({
  uri : '/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <div className="App">
              <img src={logo} alt="Logo SpaceX" className="img-fluid" style={{display:'block', margin:'auto'}}/>
              <Route exact path="/" component={Launches} />
              <Route exact path="/launch/:flight_number" component={Launch} />
            </div>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
