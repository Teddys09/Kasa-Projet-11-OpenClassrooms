import React, { useState } from 'react';
import rightArrow from '../assets/icons/arrow_right.svg';
import leftArrow from '../assets/icons/arrow_left.svg';

const LightBox = (product) => {
  product = product.product;
  const [index, setIndex] = useState(0);

  function indexImage(e) {
    if (e.target.classList.contains('arrow')) {
      console.log('right');
      if (index === product.pictures.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }
    if (e.target.classList.contains('left')) {
      if (index === 0) {
        setIndex(product.pictures.length - 1);
      } else {
        setIndex(index - 1);
      }
    }
  }

  return (
    <div className="lightbox">
      <img
        className="img-lightbox"
        src={product?.pictures[index]}
        alt={product?.title}
      />
      <img
        className="arrow right"
        src={rightArrow}
        alt="RightArrow"
        onClick={(e) => indexImage(e)}
      />
      <img
        className="arrow left"
        src={leftArrow}
        alt="LeftArrow"
        onClick={(e) => indexImage(e)}
      />
    </div>
  );
};

export default LightBox;
