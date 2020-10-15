import React from 'react';

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

export default Book;
