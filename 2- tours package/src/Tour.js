import React, { useState } from "react";

const Tour = ({ id, image, name, info, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {/* Ternary Operator */}
          {readMore ? info : `${info.substring(0, 200)}...`} 
          <button onClick={() => setReadMore(!readMore)}>
            {!readMore ? "Read More" : "Read Less"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
