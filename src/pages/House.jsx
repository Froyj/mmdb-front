import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../api/axios-config";
import BookingForm from "../components/BookingForm";

import {
  Container,
  Information,
  Description,
  EquipmentContainer,
  Showlist,
  InfoButton,
  EquipmentList,
  ImagesDiv,
  PrincipalImg,
} from "../components/common";
import "../index.css";
import Navigation from "../components/Navigation";

// eslint-disable-next-line react/prop-types
function Equipments({ homeEquipments = null }) {
  if (!homeEquipments) {
    return null;
  }

  const roomsList = Object.keys(homeEquipments.equipment);

  return (
    <>
      {roomsList.map((room) => (
        <>
          <h3>{room}</h3>
          <ul>
            {homeEquipments.equipment[room].map((equipment) => (
              <li key={equipment.id}>{equipment.name}</li>
            ))}
          </ul>
        </>
      ))}
    </>
  );
}

function House() {
  const { id } = useParams();
  const [house, setHouse] = useState(null);

  useEffect(() => {
    axios
      .get(`/home_to_rent/${id}`)
      .then((res) => res.data)
      .then((data) => setHouse(data))
      .catch((err) => console.log(err));
  }, []);

  const secondaryImage = house?.image.secondary.slice(0, 4).map((el, index) => (
    <div className={`grid${index + 2}`}>
      <img src={process.env.REACT_APP_API_URL + el} alt="maison" key={el} />
    </div>
  ));

  const homeActivity = house?.home_activity.map((a) => (
    <li key={a.activity.name}> {a.activity.name} </li>
  ));

  const [panelToDisplay, setPanelToDisplay] = useState("");

  const handleClick = (panelName) => {
    if (panelName === panelToDisplay) {
      setPanelToDisplay("");
    } else {
      setPanelToDisplay(panelName);
    }
  };

  // const handleClick = (panelName) => {
  //   setPanelToDisplay(panelName);
  // };

  if (!house) {
    return null;
  }

  return (
    <>
      <Navigation />
      <Container>
        <div>
          <h1> {house.name} </h1>
          <p>
            {house.adress}, {house.country}{" "}
          </p>
        </div>
        <ImagesDiv>
          <PrincipalImg>
            <img
              src={
                house
                  ? process.env.REACT_APP_API_URL + house.image.principal
                  : null
              }
              alt={house.name}
            />
          </PrincipalImg>
          {secondaryImage}
        </ImagesDiv>
        <Information>
          <Description>
            <h2>Description</h2>
            <p>{house.describe_long}</p>
            <EquipmentContainer>
              <Showlist className="showButton">
                <InfoButton
                  type="button"
                  onClick={() => handleClick("equipment")}
                  className="dropDown-title"
                >
                  <h3> Équipements </h3>
                </InfoButton>
                <InfoButton
                  type="button"
                  onClick={() => handleClick("activity")}
                  className="dropDown-title"
                >
                  <h3> Activités </h3>
                </InfoButton>
                <InfoButton
                  type="button"
                  onClick={() => handleClick("condition")}
                >
                  <h3> Conditions d'annulation </h3>
                </InfoButton>
              </Showlist>
              <EquipmentList
                className={`equipment-list ${
                  panelToDisplay === "equipment" ? "visible" : ""
                }`}
              >
                <div className="dropDown-list">
                  <Equipments homeEquipments={house.home_equipment} />
                </div>
              </EquipmentList>
              <EquipmentList
                className={`activity-list ${
                  panelToDisplay === "activity" ? "visible" : ""
                }`}
              >
                <ul> {homeActivity} </ul>
              </EquipmentList>
              <EquipmentList
                className={`condition-list ${
                  panelToDisplay === "condition" ? "visible" : ""
                }`}
              >
                <ul>
                  <li>{house?.renting_conditions.total}</li>
                  <li>{house?.renting_conditions.partial}</li>
                </ul>
              </EquipmentList>
            </EquipmentContainer>
          </Description>
          <BookingForm house={house} id={id} />
        </Information>
      </Container>
    </>
  );
}

export default House;
