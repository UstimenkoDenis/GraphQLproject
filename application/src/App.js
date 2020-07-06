import React from 'react';
import Directors from './components/directors';
import Movies from './components/movies';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider }  from 'react-apollo';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/header';

const client = new ApolloClient({
  uri: 'http://localhost:3005/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="app">
          <Header/>
          <div className="body">
            <Route path = '/' exact component = {()=><h1>Welcome</h1>}/>
            <Route path = '/movies' exact component = {Movies}/>
            <Route path = '/directors' component ={Directors}/>
          </div>
        </div>
      </Router>      
    </ApolloProvider>
   
  );
}

export default App;
