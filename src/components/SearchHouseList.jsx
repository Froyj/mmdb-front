import PropTypes from "prop-types";
import styled from "styled-components";
import SearchHouseCard from "./SearchHouseCard";

function SearchHouseList({ houses }) {
    SearchHouseList.propTypes = {
        houses: PropTypes.arrayOf(PropTypes.object).isRequired,
    }

    return (
        <SearchContainer>
            {houses.map(house => 
                <SearchHouseCard
                    key={house.id}
                    id={house.id} 
                    name={house.name} 
                    text={house.describe_short} 
                    image={house.image.principal} 
                    city={house.city}
                    capacity={house.capacity}
                    price={house.price_by_night}
                />
            )}
        </SearchContainer>
    );
}
export default SearchHouseList;

const SearchContainer = styled.div `
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;
