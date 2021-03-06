import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/master.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com'
});


ReactDOM.render(<ApolloProvider client={client}>
  <App />
</ApolloProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
