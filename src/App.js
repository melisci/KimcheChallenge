import React from "react";

import Header from './components/header';
import SearchBar from './components/searchBar';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com'
});


const App = () => (
  <ApolloProvider client={client}>
  <Header />
  <SearchBar />
  </ApolloProvider>
);
export default App;
