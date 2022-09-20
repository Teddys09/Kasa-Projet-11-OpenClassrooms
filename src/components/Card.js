import React from 'react';
import data from '../assets/data/data.json';
import { Link } from 'react-router-dom';
//'./product.html?_id=' + id

const Card = () => {
  console.log(data);
  return data.map((item) => (
    <div className="card" key={item.id}>
      <Link to={'./logement?_id=' + item.id}>
        <img id={item.id} src={item.cover} alt={item.title} />
      </Link>

      <div className="card-content">
        <h3>{item.title}</h3>
      </div>
    </div>
  ));
};

export default Card;
