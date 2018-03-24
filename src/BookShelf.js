import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookShelf = props => (
  <div className='bookshelf'>
    <h2 className='bookshelf-title'>{props.title}</h2>
    <div className='bookshelf-books'>
      <ol className='books-grid'>
        {props.books.map(book => (
          <li>
            <Book book={book} />
          </li>
        ))}
      </ol>
    </div>
  </div>
);

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(PropTypes.shape({
    authors: PropTypes.array,
    canonicalVolumeLink: PropTypes.string,
    contentVersion: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
    imageLinks: PropTypes.object,
    industryIdentifiers: PropTypes.array,
    infoLink: PropTypes.string,
    language: PropTypes.string,
    maturityRating: PropTypes.string,
    pageCount: PropTypes.number,
    panelizationSummary: PropTypes.object,
    previewLink: PropTypes.string,
    printType: PropTypes.string,
    publishedDate: PropTypes.string,
    readingModes: PropTypes.object,
    shelf: PropTypes.string,
    title: PropTypes.string,
  })).isRequired,
};

export default BookShelf;
