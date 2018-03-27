import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Loadble from 'react-loading-overlay';
import BooksList from './BooksList';
import BookSearch from './BookSearch';
import * as BooksAPI from './utils/BooksAPI';
import './App.css';

class App extends Component {
  state = {
    books: {},
    loading: false,
  }

  componentDidMount = () => {
    this.setState({ loading: true });
    BooksAPI.getAll().then((books) => {
      const reduceBooks = books.reduce((res, book) => {
        const result = res;
        result[book.id] = book;
        return result;
      }, {});
      this.setState({ books: reduceBooks, loading: false });
    });
  }

  moveBookShelf = (book, shelf) => {
    this.setState({ loading: true });
    BooksAPI.update(book, shelf).then(() => {
      const books = { ...this.state.books };
      books[book.id] = { ...book, shelf };
      this.setState({
        books,
        loading: false,
      });
    });
  }

  render() {
    return (
      <Loadble
        active={this.state.loading}
        spinner
        text='Loading...'
      >
        <Route
          exact
          path='/'
          render={() => (
            <BooksList
              onMoveBook={(book, shelf) => (this.moveBookShelf(book, shelf))}
              books={this.state.books}
              shelfs={this.state.shelfs}
            />
          )}
        />
        <Route
          path='/search'
          render={() => (
            <BookSearch
              existsBooks={this.state.books}
              onMoveBook={(book, shelf) => (this.moveBookShelf(book, shelf))}
            />
          )}
        />
      </Loadble>
    );
  }
}

export default App;
