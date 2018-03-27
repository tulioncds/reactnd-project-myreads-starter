import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SHELFS } from './utils/Constants';
import BookShelf from './BookShelf';

const BooksList = (props) => {
  const booksWantToRead = Object.values(props.books)
    .filter(book => book.shelf === SHELFS.WANT_TO_READ);

  const booksCurrentyReading = Object.values(props.books)
    .filter(book => book.shelf === SHELFS.CURRENTLY_READING);

  const booksRead = Object.values(props.books)
    .filter(book => book.shelf === SHELFS.READ);

  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        <div>
          <BookShelf
            title='Currently Reading'
            books={booksCurrentyReading}
            onMoveBook={props.onMoveBook}
          />
          <BookShelf
            title='Want to Read'
            books={booksWantToRead}
            onMoveBook={props.onMoveBook}
          />
          <BookShelf
            title='Read'
            books={booksRead}
            onMoveBook={props.onMoveBook}
          />
        </div>
      </div>
      <div className='open-search'>
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.object.isRequired,
  onMoveBook: PropTypes.func.isRequired,
};

export default BooksList;
