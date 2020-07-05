import React from 'react';
import Directors from './components/directors';
import Movies from './components/movies';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider }  from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:3005/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <Movies/>
        <Directors/>
      </div>
    </ApolloProvider>
   
  );
}

export default App;
