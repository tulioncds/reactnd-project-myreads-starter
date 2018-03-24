import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import BooksList from './BooksList';
import BookSearch from './BookSearch';
import * as BooksAPI from './utils/BooksAPI';
import './App.css';

class App extends Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  render() {
    return (
      <div>
        <Route
          path='/'
          render={() => (
            <BooksList
              books={this.state.books}
            />
          )}
        />
        <Route path='/search' component={BookSearch} />
      </div>
    );
  }
}

export default App;
