import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./exploreSection.css";

const ExploreSection = () => {
  const [restaurantsData, setRestaurantsData] = useState([]);
  const navigate = useNavigate();

  // Function to fetch restaurant data
  const getRestaurants = async () => {
    try {
      const response = await axios.get(
        "https://project-esoc-git-main-kollideepikas-projects.vercel.app/restaurant",
        {
          adapter: axios.defaults.adapter, // Force browser adapter
        }
      );
      setRestaurantsData(response.data.data);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  // Function to handle navigation
  const handleNavigation = (restaurant) => {
    navigate("/restaurantDetail", { state: { restaurant } });
  };

  console.log(restaurantsData);

  return (
    <div className="explore-card cur-po">
        <div className="title">Famous Restaurants</div>
      <div className="explore-card-cover">
  
        {restaurantsData && restaurantsData.length > 0 && (
          <div className="card-container">
            {restaurantsData[0].restaurants.map((data, index) => (
              <div
                key={index}
                className="card"
                onClick={() => handleNavigation(data.restaurant)}
              >
                <img
                  src={data.restaurant.featured_image}
                  width={100}
                  height={100}
                  alt={data.restaurant.name}
                />
                <span>{data.restaurant.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExploreSection;
