import PropTypes from "prop-types";
import styled from "styled-components";
import { SearchOutline } from "@styled-icons/evaicons-outline/SearchOutline";
import SearchHouseList from "../components/SearchHouseList";
import Global from "../components/styled-components/Global";
import Banner from "../components/styled-components/Banner";
import FilledButton from "../components/styled-components/FilledButton";
import colors from "../components/styled-components/colors";

function Search({ houses }) {
  Search.propTypes = {
    houses: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  return (
    <>
      <Banner image="url('./ressources/Banner-Nos-maisons-forestières.jpg')">
        Nos maisons forestières
      </Banner>
      <Global>
        <FilterContainer>
          <FilledButton
            margin="1rem"
            width="10rem"
            height="3rem"
            fontSize="1rem"
          >
            {" "}
            Région{" "}
          </FilledButton>
          <FilledButton
            margin="1rem"
            width="10rem"
            height="3rem"
            fontSize="1rem"
          >
            {" "}
            Voyageurs{" "}
          </FilledButton>
          <FilledButton
            margin="1rem"
            width="10rem"
            height="3rem"
            fontSize="1rem"
          >
            {" "}
            Arrivée{" "}
          </FilledButton>
          <FilledButton
            margin="1rem"
            width="10rem"
            height="3rem"
            fontSize="1rem"
          >
            {" "}
            Départ{" "}
          </FilledButton>
          <SearchOutline color={colors.brown} size="2.5rem" />
        </FilterContainer>
        <SearchHouseList houses={houses} />
      </Global>
    </>
  );
}

export default Search;

const FilterContainer = styled.div`
  display: flex;
  margin: 1rem 0rem;
  font-size: 2rem;
  align-items: center;

  @media (max-width: 768px){
    display: block;
  }
`;
