import React from 'react';
import data from '../assets/data/data.json';
import Dropdown from '../components/Dropdown';
import LightBox from '../components/LightBox';
import Rating from '../components/Rating';
import Tag from '../components/Tag';
import Error from './Error';

const Logement = () => {
  const url = window.location.href;
  const id = url.substring(url.lastIndexOf('=') + 1);

  const product = data.find((item) => item.id === id);

  // display the product
  if (product) {
    const description = {
      name: 'Description',
      content: product.description,
    };
    const equipments = {
      name: 'Equipements',
      content: product.equipments,
    };
    return (
      <div className="product-section">
        <LightBox product={product} />
        <div className="info-container">
          <div className="title-tag-container">
            <div className="title-location">
              <h1 className="product-title">{product.title}</h1>
              <p className="product-location">{product.location}</p>
            </div>
            <Tag tag={product.tags} />
          </div>

          <div className="name-star-container">
            <div className="name-img">
              <p>{product.host.name}</p>
              <img src={product.host.picture} alt={product.host.name} />
            </div>
            <Rating rating={product.rating} />
          </div>
        </div>
        <div className="description-stuff-container">
          <Dropdown {...description} />
          <Dropdown {...equipments} />
        </div>
      </div>
    );
  } else {
    return <Error />;
  }
};

export default Logement;
