import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import BooksList from './BooksList';
import BookSearch from './BookSearch';
// import * as BooksAPI from './BooksAPI'
import './App.css';

class App extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Route path='/' component={BooksList} />
        <Route path='/search' component={BookSearch} />
      </div>
    );
  }
}

export default App;
