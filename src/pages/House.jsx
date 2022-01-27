import styled from "styled-components";
import { useParams } from "react-router-dom";
import { PropTypes } from "prop-types";
import Global from "../components/styled-components/Global";

function House({ houses }) {
  House.propTypes = {
    houses: PropTypes.string.isRequired,
  };

  const { id } = useParams();

  const selectedHouse = houses.filter((array) => array.id === parseInt(id, 10));

  return (
    <Global>
      <h1> {selectedHouse[0].name} </h1>
      <p>
        {" "}
        {selectedHouse[0].adress} {selectedHouse[0].country}{" "}
      </p>
      <ImagesDiv>
        <img
          src={selectedHouse[0].image.principal}
          alt={selectedHouse[0].name}
        />
      </ImagesDiv>
    </Global>
  );
}

const ImagesDiv = styled.div`
  display: flex;
`;
export default House;
