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
    <div className="gridImg">
      <img src={el} alt="maison" key={el} />
    </div>
  ));

  const condition = houses[id - 1].renting_conditions.condition.map((el) => (
    <li>{el}</li>
  ));

  // const homeEquipment = houses[id - 1].home_equipement.map((el) => (
  //   for (let i = 0; i <home_equipement.length; i ++) {
  //     // une boucle dans la boucle afin d'accéder aux clé d'objet?
  //   }
  // ));

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
      <Information>
        <Description>
          <h2>Description</h2>
          {houses[id - 1].describe_long}
          <h2>Condition d'annulation</h2>
          <ul>{condition}</ul>
          <h2>Équipement disponible</h2>
          <ul>
            <li>ici seront les équipement de la maison</li>
            <li>ici aussi seront les équipement de la maison</li>
          </ul>
        </Description>
        <Booking>calendrier</Booking>
      </Information>
    </Global>
  );
}

const ImagesDiv = styled.div`
  display: flex;
  flex-direction: row;
  outline: 9px solid #1c6ea4;
  /* height: auto; */
  /* width: 100%; */
  justify-content: space-evenly;
`;

const PrincipalImg = styled.div`
  /* display: flex; */
  border: 5px black solid;
  width: 100%;
  height: auto;

  img {
    height: auto;
    width: 100%;
    object-fit: cover;
  }
`;

const SecondaryImg = styled.div`
  display: flex;
  border: 5px blue solid;
  flex-wrap: wrap;
  justify-content: space-evenly;
  /* width: 50%; */
  height: auto;
  justify-content: space-evenly;
  
  .gridImg {
    display: flex;
    flex-direction: row;
    border: 4px pink solid;
    width: 45%;
    /* justify-content: space-evenly; */
    
  },
  
  img {
    /* display: flex; */
    height: auto;
    width: 100%;
    object-fit : cover
  }
`;

const Information = styled.div`
  border: 4px solid red;
  display: flex;
`;

const Description = styled.div`
  border: 4px solid grey;
  width: 50%;
`;

const Booking = styled.div`
  border: 4px solid grey;
`;

export default House;
