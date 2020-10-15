import React from 'react';
import { render } from 'react-dom';

import './index.css';

import { books } from './books';

import Book from './Book';

const BookList = () => {
  return (
    <section className='book-list-container'>
      <h1>Oprah's Book Club</h1>
      <div className='book-list'>
        {books.map((book) => (
          <Book key={book.id} {...book} />
        ))}
      </div>
    </section>
  );
};

render(<BookList />, document.getElementById('root'));
