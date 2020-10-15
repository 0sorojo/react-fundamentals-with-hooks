import React from 'react';
import { render } from 'react-dom';

import './index.css';

const image = 'https://m.media-amazon.com/images/I/811opppMPQL._AC_UY218_.jpg';
const title = 'Caste';
const subTitle = 'the Origins of Our Discontents';
const author = 'Isabel Wilkerson';

const BookList = () => {
  return (
    <section className='book-list-container'>
      <h1>Oprah's Book Club</h1>
      <div className='book-list'>
        <Book title={title} />
      </div>
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img src={image} alt='' />
      <h2 className='title'>{props.title}</h2>
      <h3>{subTitle}</h3>
      <p className='author'>{author}</p>
    </article>
  );
};

render(<BookList />, document.getElementById('root'));
