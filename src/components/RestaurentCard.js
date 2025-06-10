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
export default RestaurentCard;