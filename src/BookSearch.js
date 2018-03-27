import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loadble from 'react-loading-overlay';
import BookShelf from './BookShelf';
import * as BooksAPI from './utils/BooksAPI';

class BookSearch extends Component {
  static propTypes = {
    existsBooks: PropTypes.object.isRequired,
    onMoveBook: PropTypes.func.isRequired,
  }

  state = {
    searchedBooks: [],
    loading: false,
  }

  bookSearch = (query) => {
    this.setState({ loading: true });
    BooksAPI.search(query).then((res) => {
      let searchedBooks = [];
      if (res && !Object.prototype.hasOwnProperty.call(res, 'error')) {
        searchedBooks = res.map((b) => {
          let book = b;
          if (this.props.existsBooks[book.id]) {
            book = this.props.existsBooks[book.id];
          }
          return book;
        });
      }
      this.setState({ searchedBooks, loading: false });
    });
  }

  handleChangeQuery = (e) => {
    if (e.key === 'Enter') {
      this.bookSearch(e.target.value);
    }
  }

  render() {
    return (
      <Loadble
        active={this.state.loading}
        spinner
        text='Loading...'
      >
        <div className='search-books'>
          <div className='search-books-bar'>
            <Link className='close-search' to='/'>Close</Link>
            <div className='search-books-input-wrapper'>
              <input type='text' placeholder='Search by title or author' onKeyPress={this.handleChangeQuery} />
            </div>
          </div>
          <div className='search-books-results'>
            <ol className='books-grid' />
            <BookShelf
              title='Searched Books'
              books={this.state.searchedBooks}
              onMoveBook={this.props.onMoveBook}
            />
          </div>
        </div>
      </Loadble>
    );
  }
}

export default BookSearch;
