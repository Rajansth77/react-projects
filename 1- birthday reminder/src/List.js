import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((c) => (
        <article key={c.id} className="person">
          <img src={c.image} alt={c.name} />
          <div>
            <h4>{c.name}</h4>
            <p>{c.age} years old.</p>
          </div>
        </article>
      ))}
    </>
  );
};

export default List;
