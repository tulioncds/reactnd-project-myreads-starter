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

  moveBookShelf(book, shelf) {
    BooksAPI.update(book, shelf).then(() => {
      const updatedBook = { ...book, shelf };
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat(updatedBook),
      }));
    });
  }

  render() {
    return (
      <div>
        <Route
          path='/'
          render={() => (
            <BooksList
              onMoveBook={(book, shelf) => (this.moveBookShelf(book, shelf))}
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
