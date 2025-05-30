import React from "react";
import ReactDOM from "react-dom/client";

const Header = () =>
{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://cdn.dribbble.com/userupload/33218474/file/original-0ca209eefe24d8e59b04b5783ae3ced6.jpg?resize=2000x1600" ></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
                </div>
        </div>
    );
}

const RestaurentCard = ({ resObj }) => {
    return (
        <div className="res-card">
            <img
                className="res-logo"
                src={resObj.image}
                alt={resObj.name}
            />
            <h2>{resObj.name}</h2>
            <p>Rating: {resObj.avgRating}</p>
            <p>Cuisine: {resObj.cuisine.join(", ")}</p>
            <p>Delivery Time: {resObj.deliveryTime} mins</p>
        </div>
    );
};


//KFC Food API DATA
const restaurants = [
  {
    name: "Theobroma",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/eca9071f-7001-4602-a844-723076550167_335159.jpg",
    cuisine: ["Desserts"],
    avgRating: 4.5,
    deliveryTime: 37
  },
  {
    name: "Chinese Wok",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/e0839ff574213e6f35b3899ebf1fc597",
    cuisine: ["Chinese", "Asian", "Tibetan", "Desserts"],
    avgRating: 4.1,
    deliveryTime: 50
  },
  {
    name: "Burger King",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/ab95b4ea-7b9d-4be0-897b-51acf9207fa1_767186.jpg",
    cuisine: ["Burgers", "American"],
    avgRating: 4.2,
    deliveryTime: 41
  },
  {
    name: "Pizza Hut",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/82395a21-141b-447c-b1ff-a7889be7cd42_595197.JPG",
    cuisine: ["Pizzas"],
    avgRating: 4.1,
    deliveryTime: 33
  },
  {
    name: "NIC Ice Creams",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/10/70d85385-75b8-4b18-b438-ed888fa287a3_108985.JPG",
    cuisine: ["Ice Cream", "Desserts"],
    avgRating: 4.6,
    deliveryTime: 29
  },
  {
    name: "McDonald's",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/2ee3c982-b2a2-4cb4-b08f-0cc67fdfa9fc_852282.JPG",
    cuisine: ["Burgers", "Beverages", "Cafe", "Desserts"],
    avgRating: 4.4,
    deliveryTime: 34
  },
  {
    name: "KFC",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/09460b80-bb20-48ec-9b51-ff2f35ac397c_458199.JPG",
    cuisine: ["Burgers", "Fast Food", "Rolls & Wraps"],
    avgRating: 4.1,
    deliveryTime: 18
  }
];

const Body = () =>
{
    return (
        <div className="body">
            <div className="search-container">
                <input type="text" placeholder="Search for food items" />
                <button className="search-btn">Search</button>
            </div>
            <br></br>
            <div className="res-container">
                <RestaurentCard resObj={restaurants[0]} />
                <RestaurentCard resObj={restaurants[1]} />
                <RestaurentCard resObj={restaurants[2]} />
                <RestaurentCard resObj={restaurants[3]} />
                <RestaurentCard resObj={restaurants[4]} />
                <RestaurentCard resObj={restaurants[5]} />
                <RestaurentCard resObj={restaurants[6]} />
                
                </div>
        </div>
    );
}

const Footer = () =>
{
    return (
        <div className="footer">
            <h3>Footer</h3>
            <p>© 2023 Food Delivery App</p>
        </div>
    );
}

const AppLayout = () =>
{
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AppLayout />

)