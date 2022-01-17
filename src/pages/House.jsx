import styled from "styled-components";
import { useParams } from "react-router-dom";
import { PropTypes } from "prop-types";
// import { useEffect, useState } from "react";
// import axios from "axios";
import Global from "../components/styled-components/Global";
import FilledButton from "../components/styled-components/FilledButton";
import "../index.css";
// import Carrousell from "../components/Carousell";

function House({houses}) {
  House.propTypes = {
    houses: PropTypes.string.isRequired,
  };

  const { id } = useParams();
  // const [house, setHouse] = useState([]);

  // useEffect(() => {
  //   axios.get(`/home_to_rent/${id}`)
  //   .then((res) => res.data)
  //   .then((data) => setHouse(data))
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
    <li key={el}>{el}</li>
  ));

  const homeActivity = houses[id - 1].home_activity.map((a) => (
    <li key={a.activity.name}> {a.activity.name} </li>
  ));

  const bathroom = houses[id - 1].home_equipment
    .filter((el) => el.room_name === "bathroom")
    .map((el) => <li key={el.equipment.name}> {el.equipment.name} </li>);

  const garden = houses[id - 1].home_equipment
    .filter((el) => el.room_name === "outdoor")
    .map((el) => <li key={el.equipment.name}> {el.equipment.name} </li>);

  const inHouse = houses[id - 1].home_equipment
    .filter((el) => el.room_name === "maison")
    .map((el) => <li key={el.equipment.name}> {el.equipment.name} </li>);

  const kitchen = houses[id - 1].home_equipment
    .filter((el) => el.room_name === "kitchen")
    .map((el) => <li key={el.equipment.name}> {el.equipment.name} </li>);

  const security = houses[id - 1].home_equipment
    .filter((el) => el.room_name === "security")
    .map((el) => <li key={el.equipment.name}> {el.equipment.name} </li>);

  const bedroom = houses[id - 1].home_equipment
    .filter((el) => el.room_name === "bedroom")
    .map((el) => <li key={el.equipment.name}> {el.equipment.name} </li>);

  const heating = houses[id - 1].home_equipment
    .filter((el) => el.room_name === "heating")
    .map((el) => <li key={el.equipment.name}> {el.equipment.name} </li>);

  const toilet = houses[id - 1].home_equipment
    .filter((el) => el.room_name === "WC")
    .map((el) => <li key={el.equipment.name}> {el.equipment.name} </li>);

  const entertainment = houses[id - 1].home_equipment
    .filter((el) => el.room_name === "entertainment")
    .map((el) => <li key={el.equipment.name}> {el.equipment.name} </li>);

  const network = houses[id - 1].home_equipment
    .filter((el) => el.room_name === "internet")
    .map((el) => <li key={el.equipment.name}> {el.equipment.name} </li>);

  const activity = houses[id - 1].home_equipment
    .filter((el) => el.room_name === "activity")
    .map((el) => <li key={el.equipment.name}> {el.equipment.name} </li>);

  // const dropDownTitle = document.querySelector(".dropDown-title");

  const handleClickEqu = () => {
    const dropDownList = document.querySelector(".equipment-list");
    dropDownList.classList.toggle("visible");
  };

  const handleClickCond = () => {
    const dropDownList = document.querySelector(".condition-list");
    dropDownList.classList.toggle("visible");
  };

  const handleClickAct = () => {
    const dropDownList = document.querySelector(".activity-list");
    dropDownList.classList.toggle("visible");
  };

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
        {/* <Carrousell houses={houses} /> */}
      </ImagesDiv>
      <Information>
        <Description>
          <h2>Description</h2>
          <p>{houses[id - 1].describe_long}</p>
          <EquipmentContainer>
            <Showlist className="showButton">
              <InfoButton
                type="button"
                onClick={() => handleClickEqu()}
                className="dropDown-title"
              >
                <h3> Équipements </h3>
              </InfoButton>
              <InfoButton
                type="button"
                onClick={() => handleClickAct()}
                className="dropDown-title"
              >
                <h3> Activités </h3>
              </InfoButton>
              <InfoButton type="button" onClick={() => handleClickCond()}>
                <h3> Conditions d'annulation </h3>
              </InfoButton>
            </Showlist>
            <EquipmentList className="equipment-list">
              <div className="dropDown-list">
                <ul>
                  {kitchen.length > 0 ? <h3>Cuisine</h3> : null}
                  {kitchen}
                  {inHouse.length > 0 ? <h3>Interieur de la maison</h3> : null}
                  {inHouse}
                  {bedroom.length > 0 ? <h3>Chambre</h3> : null}
                  {bedroom}
                  {bathroom.length > 0 ? <h3>Salle de bain</h3> : null}
                  {bathroom}
                  {toilet.length > 0 ? <h3>Hygiène</h3> : null}
                  {toilet}
                  {heating.length > 0 ? <h3>Chauffage</h3> : null}
                  {heating}
                </ul>
              </div>
              <div className="dropDown-list">
                <ul>
                  {garden.length > 0 ? <h3>Exterieur</h3> : null}
                  {garden}
                  {entertainment.length > 0 ? <h3>Divertissement</h3> : null}
                  {entertainment}
                  {activity.length > 0 ? <h3>Activités</h3> : null}
                  {activity}
                  {network.length > 0 ? <h3>Internet et réseaux</h3> : null}
                  {network}
                  {security.length > 0 ? <h3>Sécurité</h3> : null}
                  {security}
                </ul>
              </div>
            </EquipmentList>
            <EquipmentList className="activity-list">
              <ul> {homeActivity} </ul>
            </EquipmentList>
            <EquipmentList className="condition-list">
              <ul> {condition} </ul>
            </EquipmentList>
          </EquipmentContainer>
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

/* display: flex;
flex-direction: column; */
border-radius: 25px;
overflow: hidden;
/* border: 5px solid black; */


img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.grid2, .grid3, .grid4, .grid5 {
  display: none;
} 

@media screen and (min-width: 600px) {
  display: grid;
  margin: 1.5em 0px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  height: auto;
  width: 100%;
  
  
  .grid2 {
    display: block;
    grid-area: 1 / 3 / 2 / 4;
  }
  
  .grid3 {
    display: block;
    grid-area: 1 / 4 / 2 / 5;
  }
  
  .grid4 {
    display: block;
    grid-area: 2 / 3 / 3 / 4;
  }
  
  .grid5 {
    display: block;
    grid-area: 2 / 4 / 3 / 5;
  }
}
  `;
  
  const PrincipalImg = styled.div`
  width: 100%;
  height: auto;
  grid-area: 1 / 1 / 3 / 3;
`;

const Information = styled.div`
  /* border: 4px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }

`;

const Description = styled.div`
  /* border: 4px solid grey; */
  width: 100%;

  h2 {
    margin: 0.5em;
  }

  h3 {
    margin: 0.7em 0;
  }

  li {
    list-style: none;
    /* margin-bottom: 10px; */
    margin-left: 0.5em;
  }

  @media screen and (min-width: 800px) {
    width: 50%;
  }
`;

const EquipmentContainer = styled.div`
  .dropDown-title {
    cursor: pointer;
  }

  .visible {
    display: block;
    justify-content: space-around;
    /* display: flex; */
  }

  }
`;

const EquipmentList = styled.div`
  display: none;
  background-color: rgba(179, 154, 154, 0.123);
  /* border: 2px black solid; */
  /* width: 70px; */
  /* text-align: center; */
  /* border: 4px solid green; */

  .dropDown-list {
    display: flex;
    flex-direction: row;
    /* justify-content: space-between;
    align-items: center; */
  }
`;

const Showlist = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */

  @media screen and (min-width: 600px) {
    flex-flow: row wrap;
    justify-content: space-evenly;
    width: 100%;
    /* background-color: gray; */
  }
`;

const InfoButton = styled(FilledButton)`
  /* width: 33%; */
  /* margin: 0; */
  padding: .6em;

  @media screen and (min-width: 600px) {

  }

`;

const Booking = styled.div`
  border: 4px solid grey;
  width: 100%;
  text-align: center;
  
  @media screen and (min-width: 600px) {
    border: solid 10px red;
    width: 30%
  }

`;

export default House;
