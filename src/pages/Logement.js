import React from 'react';
import data from '../assets/data/data.json';
import Dropdown from '../components/Dropdown';
import LightBox from '../components/LightBox';
import Rating from '../components/Rating';
import Tag from '../components/Tag';

const Logement = () => {
  const url = window.location.href;
  const id = url.substring(url.lastIndexOf('=') + 1);

  const product = data.find((item) => item.id === id);
  console.log(product);
  console.log(product.equipments);

  const description = {
    name: 'Description',
    content: product.description,
  };
  const equipments = {
    name: 'Equipements',
    content: product.equipments,
  };

  // display the product
  return (
    <div className="product-section">
      <LightBox product={product} />
      <div className="title-host-container">
        <div className="title-location">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-location">{product.location}</p>
        </div>
        <div className="name-img">
          <p>{product.host.name}</p>
          <img src={product.host.picture} alt={product.host.name} />
        </div>
      </div>
      <div className="tag-star-container">
        <Tag tag={product.tags} />
        <Rating rating={product.rating} />
      </div>
      <div className="description-stuff-container">
        <Dropdown {...description} />
        <Dropdown {...equipments} />
      </div>
    </div>
  );
};

export default Logement;
