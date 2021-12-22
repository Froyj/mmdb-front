import PropTypes from "prop-types";
import SearchHouseCard from "./SearchHouseCard";

function SearchHouseList({ houses }) {
    SearchHouseList.propTypes = {
        houses: PropTypes.string.isRequired,
    }

    return (
        <>
            {houses.map(house => 
                <SearchHouseCard 
                    id={house.id} 
                    name={house.name} 
                    text={house.describe_short} 
                    // image={house.images.principal} 
                    city={house.city}
                    capacity={house.capacity} 
                />
            )}
        </>
    );
}

export default SearchHouseList;