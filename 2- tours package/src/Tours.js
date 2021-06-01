import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className="underline"></div>
      </div>
      <div className="container">
        {tours.map((c) => (
          <Tour key={c.id} {...c} removeTour={removeTour}/>
        ))}
      </div>
    </section>
  );
};

export default Tours;
