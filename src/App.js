import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import {createBrowserRouter , RouterProvider} from "react-router-dom"; // Importing react-router-dom for routing capabilities
import About from "./components/About.js";
import Error from "./components/Error.js"; // Importing Error component to handle errors

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


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />, // Error component to handle errors
    },
    {
        path: "/about",
        element: <About />,
    },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);