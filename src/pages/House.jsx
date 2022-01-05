import styled from "styled-components";
import { useParams } from "react-router-dom";
import { PropTypes } from "prop-types";
import Global from "../components/styled-components/Global";

function House({ houses }) {
  House.propTypes = {
    houses: PropTypes.string.isRequired,
  };

  const { id } = useParams();

  const secondaryImage = houses[id - 1].image.secondary.map((el) => (
    <div className="secondImg">
      <img src={el} alt="maison" key={el}/>
    </div>
  ));

  return (
    <Global>
      <div>
        <h1> {houses[id - 1].name} </h1>
        <p>
          {houses[id - 1].adress}, {houses[id - 1].country}{" "}
        </p>
      </div>
      
      <ImagesDiv>
        <PrincipalImg>
          <img src={houses[id - 1].image.principal} alt={houses[id - 1].name} />
        </PrincipalImg>
        <SecondaryImg>{secondaryImage}</SecondaryImg>
      </ImagesDiv>
    </Global>
  );
}

const ImagesDiv = styled.div`
  display: flex;
  flex-direction: row;
  outline: 9px solid #1C6EA4;
  height: 30%;
  width: 100%;

  
`;

const PrincipalImg = styled.div`
  display: flex;
  border: 5px black solid;
  width: 50%;
  height: auto;

  img{
    height: 100%;
    width: auto;
    /* justify-content: center; */
    /* align-item: center; */

  }
`;

const SecondaryImg = styled.div`
  display: flex;
  border: 5px blue solid;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;


  
    .secondImg{
      border: yellow 2px solid;
      /* display: flex; */
      width: 40%;
      height: auto;
      justify-content: space-between;
    }

    img{
    height: 100%;
    width: auto;
    }
`;

export default House;
