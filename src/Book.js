import React from 'react';
import PropTypes from 'prop-types';

const style = {
  bookCover: {
    width: 128,
    height: 193,
  },
};

const Book = (props) => {
  const { title, authors, imageLinks } = props.book;
  const bookCover = {
    ...style.bookCover,
    backgroundImage: `url(${imageLinks.smallThumbnail})`,
  };
  return (
    <div className='book'>
      <div className='book-top'>
        <div className='book-cover' style={bookCover} />
        <div className='book-shelf-changer'>
          <select>
            <option value='none' disabled>Move to...</option>
            <option value='currentlyReading'>Currently Reading</option>
            <option value='wantToRead'>Want to Read</option>
            <option value='read'>Read</option>
            <option value='none'>None</option>
          </select>
        </div>
      </div>
      <div className='book-title'>{title}</div>
      <div className='book-authors'>{authors.join(', ')}</div>
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
};

export default Book;
