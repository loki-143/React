import {LOGO_URL} from '../utils/constants';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
const Header = () =>
{
    useEffect(() => {
        // This effect runs once when the component mounts
        console.log("Header component mounted");
        
        // Cleanup function (optional)
        return () => {
            console.log("Header component unmounted");
        };
    }, []); // Dependency array, runs effect when btnName changes

    // let btnName = "Login";
    let [btnName, setBtnName] = useState("Login");

    
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} ></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li><Link to="/About">About</Link></li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                    }}>
                        {btnName}
                    </button>
                </ul>
                </div>
        </div>
    );
}

export default Header;