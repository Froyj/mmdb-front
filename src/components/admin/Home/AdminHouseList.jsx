import PropTypes from "prop-types";
import styled from "styled-components";

import AdminHouseCard from "./AdminHouseCard";

function AdminHouseList({ houses, setHouses }) {
  AdminHouseList.propTypes = {
    houses: PropTypes.arrayOf(PropTypes.object).isRequired,
    setHouses: PropTypes.func.isRequired,
  };

  return (
    <HouseList>
      {houses.map((house) => (
        <AdminHouseCard
          key={house.id}
          house={house}
          id={house.id}
          name={house.name}
          image={house.image.principal}
          setHouses={setHouses}
        />
      ))}
    </HouseList>
  );
}

const HouseList = styled.div`
  display: flex;
  width: 95%;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: auto;
  column-gap: 3em;

  @media (max-width: 1024px) {
    column-gap: 2em;
    row-gap: 3em;
  }
`;
export default AdminHouseList;
