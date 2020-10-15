import React from 'react';
import { render } from 'react-dom';

import './index.css';

const BookList = () => {
  return (
    <section className='book-list-container'>
      <h1>Oprah's Book Club</h1>
      <div className='book-list'>
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </div>
    </section>
  );
};

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <>
      <img
        src='https://m.media-amazon.com/images/I/811opppMPQL._AC_UY218_.jpg'
        alt=''
      />
    </>
  );
};

const Title = () => {
  return (
    <>
      <h2 className='title'>Caste</h2>
      <h3>the Origins of Our Discontents</h3>
    </>
  );
};

const Author = () => {
  return (
    <>
      <p>Isabel Wilkerson</p>
    </>
  );
};

render(<BookList />, document.getElementById('root'));
