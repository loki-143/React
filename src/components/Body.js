import React, { useState } from "react";
import RestaurentCard from "./RestaurentCard";
import restaurants from "../utils/mockData";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

  const handleTopRated = () => {
    const topRated = restaurants.filter(
      (restaurant) => restaurant.avgRating > 4.5
    );
    setFilteredRestaurants(topRated);
  };

  return (
    <div className="body">
      <div className="top-restaurants">
        <button className="filter-btn" onClick={handleTopRated}>
          Top Rated Restaurants
        </button>
      </div>
      <br />
      <div className="res-container">
        {filteredRestaurants.map((restaurant, index) => (
          <RestaurentCard
            key={restaurant.id || restaurant.name || index}
            resObj={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
