import React from 'react';
import { render } from 'react-dom';

import './index.css';

const books = [
  {
    id: 1,
    image: 'https://m.media-amazon.com/images/I/811opppMPQL._AC_UY218_.jpg',
    title: 'Caste',
    subTitle: 'the Origins of Our Discontents',
    author: 'Isabel Wilkerson',
  },
  {
    id: 2,
    image: 'https://m.media-amazon.com/images/I/91rsCHC3qJL._AC_UY218_.jpg',
    title: 'Deacon King Kong',
    subTitle: '',
    author: 'James McBride',
  },
];

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

const Book = (props) => {
  const handleClick = (event) => {
    console.log(event.target);
    alert('you clicked me');
  };

  const complexExample = (event) => {
    console.log(event);
    console.log(event.target);
  };

  const handleMouseOver = () => {
    console.log(title);
  };

  const { image, title, subTitle, author } = props;
  return (
    <article className='book' onMouseOver={handleMouseOver}>
      <button type='button' className='x-button' onClick={complexExample}>
        X
      </button>
      <img className='image' src={image} alt='' onClick={handleClick} />
      <h2 className='title' onClick={handleClick}>
        {title}
      </h2>
      <h3>{subTitle}</h3>
      <p className='author' onClick={handleClick}>
        {author}
      </p>
    </article>
  );
};

render(<BookList />, document.getElementById('root'));
