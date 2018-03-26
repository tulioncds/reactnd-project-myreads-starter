import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';
import * as BooksAPI from './utils/BooksAPI';

class BookSearch extends Component {
  static propTypes = {
    onMoveBook: PropTypes.func.isRequired,
  }

  state = {
    searchedBooks: [],
  }

  bookSearch = (query) => {
    BooksAPI.search(query).then((res) => {
      if (!res || Object.prototype.hasOwnProperty.call(res, 'error')) {
        this.setState({ searchedBooks: [] });
      } else {
        this.setState({ searchedBooks: res });
      }
    });
  }

  handleChangeQuery = (e) => {
    this.bookSearch(e.target.value);
  }

  render() {
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link className='close-search' to='/'>Close</Link>
          <div className='search-books-input-wrapper'>
            <input type='text' placeholder='Search by title or author' onChange={this.handleChangeQuery} />
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
    );
  }
}

export default BookSearch;
