import { useState, useEffect } from "react";
import styled from "styled-components";
import { getHouses } from "../../../api/houses";

import AdminHouseCard from "./AdminHouseCard";

function AdminHouseList() {

  const [houses, setHouses] = useState([]);

  useEffect(() => {
    getHouses(setHouses)
  }, [])

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
