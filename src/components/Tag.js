import React from 'react';

const Tag = (tag) => {
  return (
    <div className="tag-container">
      {tag.tag.map((item) => (
        <div className="tag" key={item}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default Tag;
