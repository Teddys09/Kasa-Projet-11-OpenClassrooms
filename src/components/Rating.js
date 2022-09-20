import React from 'react';
import starOrange from '../assets/icons/star_orange.svg';
import starGrey from '../assets/icons/star_grey.svg';

const Rating = (rating) => {
  // function to display the stars according to the rating value
  const displayStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating.rating) {
        stars.push(<img key={i} src={starOrange} alt="star" />);
      } else {
        stars.push(<img key={i} src={starGrey} alt="star" />);
      }
    }
    return stars;
  };

  return <div>{displayStars()}</div>;
};

export default Rating;
