import styled from "styled-components";
import { useParams } from "react-router-dom";
import { PropTypes } from "prop-types";
// import { useEffect, useState } from "react";
// import axios from "axios";
import Global from "../components/styled-components/Global";

function House({ houses }) {
  House.propTypes = {
    houses: PropTypes.string.isRequired,
  };

  const { id } = useParams();
  // const [homeData, setHomeData] = useState([]);

  // useEffect(() => {
  //   axios.get(`/home_to_rent/${id}`)
  //   .then((res) => res.data)
  //   .then((data) => setHomeData(data))
  //   // eslint-disable-next-line no-console
  //   .catch((err) => console.log(err))
  // }, [])

  const secondaryImage = houses[id - 1].image.secondary
    .slice(0, 4)
    .map((el, index) => (
      <div className={`grid${index + 2}`}>
        <img src={el} alt="maison" key={el} />
      </div>
    ));

  const condition = houses[id - 1].renting_conditions.condition.map((el) => (
    <li>{el}</li>
  ));

  const bathroom = houses[id - 1].home_equipment
    .filter((el) => el.room_name === "salle de bain")
    .map((el) => <li> {el.equipment.name} </li>);

  const garden = houses[id - 1].home_equipment
    .filter((el) => el.room_name === "exterieur")
    .map((el) => <li> {el.equipment.name} </li>);

  const inHouse = houses[id - 1].home_equipment
    .filter((el) => el.room_name === "maison")
    .map((el) => <li> {el.equipment.name} </li>);

  const kitchen = houses[id - 1].home_equipment
    .filter((el) => el.room_name === "cuisine")
    .map((el) => <li> {el.equipment.name} </li>);

  const security = houses[id - 1].home_equipment
    .filter((el) => el.room_name === "sécurité")
    .map((el) => <li> {el.equipment.name} </li>);

  const bedroom = houses[id - 1].home_equipment
    .filter((el) => el.room_name === "chambre 1")
    .map((el) => <li> {el.equipment.name} </li>);

  const heating = houses[id - 1].home_equipment
    .filter((el) => el.room_name === "chauffage")
    .map((el) => <li> {el.equipment.name} </li>);

  // console.log(homeEquipment.equipment.name);

  /* 
    Si room_name en <li> deja existant afficher les equipements en <li>
    sinon créer room_name <li>
    
*/

  return (
    <Container>
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
        {secondaryImage}
      </ImagesDiv>
      <Information>
        <Description>
          <h2>Description</h2>
          {houses[id - 1].describe_long}
          <h2>Condition d'annulation</h2>
          <ul>{condition}</ul>
          <div className="equipment">
            <h2>Équipement disponible</h2>
            <ul>
              {kitchen.length > 0 ? <h3>Cuisine</h3> : null}
              {kitchen}
              {inHouse.length > 0 ? <h3>Interieur de la maison</h3> : null}
              {inHouse}
              {bedroom.length > 0 ? <h3>Chambre</h3> : null}
              {bedroom}
              {bathroom.length > 0  ? <h3>Salle de bain</h3> : null}
              {bathroom}
              {garden.length > 0 ? <h3>Exterieur</h3> : null}
              {garden}
              {security.length > 0 ? <h3>Sécurité</h3> : null}
              {security}
              {heating.length > 0 ? <h3>Chauffage</h3> : null}
              {heating}
            </ul>
          </div>
        </Description>
        <Booking>calendrier de reservation</Booking>
      </Information>
    </Container>
  );
}

const Container = styled(Global)`
  p {
    margin-left: 10px;
  }
`;

const ImagesDiv = styled.div`
  display: grid;
  margin: 25px 0px;
  border-radius: 25px;
  overflow: hidden;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  height: auto;
  width: 100%;
  
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .grid2 {
    grid-area: 1 / 3 / 2 / 4;
  }

  .grid3 {
    grid-area: 1 / 4 / 2 / 5;
  }

  .grid4 {
    grid-area: 2 / 3 / 3 / 4;
  }

  .grid5 {
    grid-area: 2 / 4 / 3 / 5;
  }
`;

const PrincipalImg = styled.div`
  width: 100%;
  height: auto;
  grid-area: 1 / 1 / 3 / 3;

`;

const Information = styled.div`
  border: 4px solid red;
  display: flex;
  justify-content: space-evenly;
`;

const Description = styled.div`
  border: 4px solid grey;
  width: 50%;
  
  .equipment {
    border: 4px solid blue;
    
  }
  
  li {
    display: flex;
    flex-direction: row;
    border: 4px solid green;
  }
`;

const Booking = styled.div`
  border: 4px solid grey;
  width: 30%;
  text-align: center;
`;

export default House;
