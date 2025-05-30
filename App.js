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

const RestaurentCard = (props) =>
{
    return (
        <div className="res-card">
            <img className="res-logo" src="https://cdn.dribbble.com/userupload/33218474/file/original-0ca209eefe24d8e59b04b5783ae3ced6.jpg?resize=2000x1600" />
            <h2>{props.ResName}</h2>
            <p>Rating: {props.Rating}</p>
            <p>Cuisine: {props.Cuisine}</p>
            <p>Delivery Time: {props.DeliTime} mins</p>
        </div>
    );
}

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
                <RestaurentCard 
                ResName="KFC" 
                Rating="4.5" 
                Cuisine="Fast Food"
                DeliTime="10" />
                <RestaurentCard
                ResName="KathFoods"
                Rating="5.0"
                Cuisine="Home Foods"
                DeliTime="1" />
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