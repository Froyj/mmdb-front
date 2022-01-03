import PropTypes from "prop-types";
import SearchHouseCard from "./SearchHouseCard";

function SearchHouseList({ houses }) {
    SearchHouseList.propTypes = {
        houses: PropTypes.arrayOf(PropTypes.object).isRequired,
    }

    return (
        <>
            {houses.map(house => 
                <SearchHouseCard
                    key={house.id}
                    id={house.id} 
                    name={house.name} 
                    text={house.describe_short} 
                    image={house.image.principal} 
                    city={house.city}
                    capacity={house.capacity} 
                />
            )}
        </>
    );
}

export default SearchHouseList;