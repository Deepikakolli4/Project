import React from "react";
import { useLocation } from "react-router-dom";

const RestaurantDetail = () => {
  const location = useLocation();
  const { restaurant } = location.state || {};

  if (!restaurant) {
    return <p>No restaurant details available.</p>;
  }

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <img src={restaurant.featured_image} alt={restaurant.name} width={200} />
      <p>{restaurant.cuisines}</p>
      <p>Location: {restaurant.location.address}</p>
    </div>
  );
};

export default RestaurantDetail;
