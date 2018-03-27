import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import BooksList from './BooksList';
import BookSearch from './BookSearch';
import * as BooksAPI from './utils/BooksAPI';
import './App.css';

class App extends Component {
  state = {
    books: {},
  }

  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      const reduceBooks = books.reduce((result, book) => {
        result[book.id] = book;
        return result;
      }, {});
      this.setState({ books: reduceBooks });
    });
  }

  moveBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      const books = { ...this.state.books };
      books[book.id] = { ...book, shelf };
      this.setState({
        books,
      });
    });
  }

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default App;
