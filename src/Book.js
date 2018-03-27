import React from 'react';
import PropTypes from 'prop-types';
import { SHELFS } from './utils/Constants';

const style = {
  bookCover: {
    width: 128,
    height: 193,
  },
};

const Book = (props) => {
  const handleMoveBook = (e) => {
    props.onMoveBook(props.book, e.target.value);
  };

  const {
    title, authors, imageLinks, shelf,
  } = props.book;

  const bookCover = {
    ...style.bookCover,
    backgroundImage: `url(${imageLinks ? imageLinks.smallThumbnail : ''})`,
  };

  return (
    <div className='book'>
      <div className='book-top'>
        <div className='book-cover' style={bookCover} />
        <div className='book-shelf-changer'>
          <select onChange={handleMoveBook}>
            <option value='none' readOnly>Move to...</option>
            <option value={SHELFS.CURRENTLY_READING} selected={shelf === SHELFS.CURRENTLY_READING}>
              Currently Reading
            </option>
            <option value={SHELFS.WANT_TO_READ} selected={shelf === SHELFS.WANT_TO_READ}>
              Want to Read
            </option>
            <option value={SHELFS.READ} selected={shelf === SHELFS.READ}>
              Read
            </option>
            <option value='none' selected={!shelf}>
              None
            </option>
          </select>
        </div>
      </div>
      <div className='book-title'>{title}</div>
      {authors &&
        <div className='book-authors'>{authors.join(', ')}</div>
      }
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
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
  }).isRequired,
  onMoveBook: PropTypes.func.isRequired,
};

export default Book;
