import PropTypes from "prop-types";
import styled from "styled-components";

import AdminHouseCard from "./adminHouseCard";

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
  width: 100%;
  flex-wrap: wrap;
  display: flex;
 
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
export default AdminHouseList;
