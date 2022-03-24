import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchHouseCard from './SearchHouseCard';

function SearchHouseList({ houses }) {
  SearchHouseList.propTypes = {
    houses: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  return (
    <SearchContainer>
      {houses.map((house) => (
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
      ))}
    </SearchContainer>
  );
}
export default SearchHouseList;

const SearchContainer = styled.div`
  margin: 2em auto;
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  column-gap: 3rem;
  row-gap: 3em;
  align-items: stretch;
  
  @media (max-width: 1024px) {
    column-gap: 2em;
    row-gap: 2em;
  }
`;
