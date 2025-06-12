import React, { useState, useEffect } from "react";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer"; // Assuming you have a Shimmer component for loading state
const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.45888&lng=78.4290079&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    console.log(json);
    // Check if the API response is valid

    // Find all restaurant cards from the API response
    const restaurantCards = json?.data?.cards?.filter(
      (card) =>
        card.card?.card?.['@type'] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    );
    // Map to restaurant info objects
    const restaurantsFromApi = restaurantCards.map(
      (card) => card.card.card.info
    );
    setAllRestaurants(restaurantsFromApi);
    setFilteredRestaurants(restaurantsFromApi);
  };

  const handleTopRated = () => {
    const topRated = allRestaurants.filter(
      (restaurant) => restaurant.avgRating > 4.0
    );
    setFilteredRestaurants(topRated);
  };

  if (!allRestaurants.length) {
    //Shimmer effect while data is loading
    return (
        <Shimmer />
    );
  }

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
