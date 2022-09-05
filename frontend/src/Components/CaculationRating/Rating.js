import React from "react";

const Rating = () => {
  const rating = (stars) => `★★★★★☆☆☆☆☆`.slice(5 - stars, 10 - stars);
  console.log(rating(4));

  return <div>Rating</div>;
};

export default Rating;
