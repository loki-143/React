const RestaurentCard = ({ resObj }) => {
    return (
        <div className="res-card">
            <img
                className="res-logo"
                src={resObj.cloudinaryImageId ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/${resObj.cloudinaryImageId}` : ""}
                alt={resObj.name}
            />
            <h2>{resObj.name}</h2>
            <p>Rating: {resObj.avgRating}</p>
            <p>Cuisine: {resObj.cuisines ? resObj.cuisines.join(", ") : "N/A"}</p>
            <p>Delivery Time: {resObj.sla?.deliveryTime ? resObj.sla.deliveryTime + " mins" : "N/A"}</p>
            <p>Cost for Two: {resObj.costForTwo || resObj.costForTwoMessage || "N/A"}</p>
        </div>
    );
};
export default RestaurentCard;