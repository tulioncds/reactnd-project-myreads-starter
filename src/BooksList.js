import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SHELFS } from './utils/Constants';
import BookShelf from './BookShelf';

const BooksList = (props) => {
  const booksWantToRead = props.books.filter(book => book.shelf === SHELFS.WANT_TO_READ);
  const booksCurrentyReading = props.books.filter(book =>
    book.shelf === SHELFS.CURRENTLY_READING);
  const booksRead = props.books.filter(book => book.shelf === SHELFS.READ);

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
          />
          <BookShelf
            title='Want to Read'
            books={booksWantToRead}
          />
          <BookShelf
            title='Read'
            books={booksRead}
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
  books: PropTypes.array.isRequired,
};

export default BooksList;
