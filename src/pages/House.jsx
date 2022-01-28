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
  // eslint-disable-next-line no-unused-vars
  const [getActivity, setGetActivity] = useState("chips");

  useEffect(() => {
    axios
      .get("/activity")
      .then((response) => response.data)
      .then((data) => setGetActivity(data))
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  }, []);

  console.log(`getActivity : ${getActivity}`);

  useEffect(() => {
    axios
      .get(`/home_to_rent/${id}`)
      .then((res) => res.data)
      .then((data) => setHouse(data))
      .catch((err) => console.log(err));
  }, []);

  const secondaryImage = house?.image.secondary.slice(0, 4).map((el, index) => (
    <div className={`grid${index + 2}`}>
      <img src={el} alt="maison" key={el} />
    </div>
  ));

  // const homeActivity = getActivity.map((a) => (
  //   <li key={a.id}> {a.activity.name} </li>
  // ));

  const handleClick = (selectorQuery) => {
    const dropDownList = document.querySelector(selectorQuery);
    dropDownList.classList.toggle("visible");
  };

  if (!house) {
    return null;
  }

  return (
    <Container>
      <div>
        <h1> {house.name} </h1>
        <p>
          {house.adress}, {house.country}{" "}
        </p>
      </div>
      <ImagesDiv>
        <PrincipalImg>
          <img src={house?.image.principal} alt={house.name} />
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
                onClick={() => handleClick(".equipment-list")}
                className="dropDown-title"
              >
                <h3> Équipements </h3>
              </InfoButton>
              <InfoButton
                type="button"
                onClick={() => handleClick(".activity-list")}
                className="dropDown-title"
              >
                <h3> Activités </h3>
              </InfoButton>
              <InfoButton
                type="button"
                onClick={() => handleClick(".condition-list")}
              >
                <h3> Conditions d'annulation </h3>
              </InfoButton>
            </Showlist>
            <EquipmentList className="equipment-list">
              <div className="dropDown-list">
                <Equipments homeEquipments={house.home_equipment} />
              </div>
            </EquipmentList>
            <EquipmentList className="activity-list">
              {/* <ul> {homeActivity} </ul> */}
            </EquipmentList>
            <EquipmentList className="condition-list">
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
  );
}

export default House;
