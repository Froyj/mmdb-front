import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../api/axios-config';
import ModalCarrousel from '../components/modalCarrousel';
import BookingForm from '../components/BookingForm';
import Equipments from '../components/Equipments';
// import FoodOption from "../components/FoodOption";

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
  DisplayModal,
} from '../components/common';
import '../index.css';

function House() {
  const { id } = useParams();
  const [house, setHouse] = useState(null);

  const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);

    function toggle() {
      setIsShowing(!isShowing);
    }

    return { isShowing, toggle };
  };

  const { isShowing, toggle } = useModal();
  const [mealOptions, setMealOptions] = useState([]);

  useEffect(() => {
    axios
      .get(`/home_to_rent/${id}`)
      .then((res) => res.data)
      .then((data) => setHouse(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/options/details`)
      .then((response) => {
        setMealOptions(response.data);
      });
  }, []);

  const secondaryImage = house?.image.secondary.slice(0, 4).map((el, index) => (
    <div className={`grid${index + 2}`}>
      <img src={process.env.REACT_APP_API_URL + el} alt='maison' key={el} />
    </div>
  ));

  const homeActivity = house?.home_activity.map((a) => (
    <li key={a.activity.name}> {a.activity.name} </li>
  ));

  const [displayActivities, setDisplayActivities] = useState('');
  const [displayConditions, setDisplayConditions] = useState('');
  const [displayOptions, setDisplayOptions] = useState('');
  const [displayMeals, setDisplayMeals] = useState('');

  const handleClick = (panelName, display, setDisplay) => {
    if (panelName === display) {
      setDisplay('');
    } else {
      setDisplay(panelName);
    }
  };

  if (!house) {
    return null;
  }

  return (
    <>
      <Container>
        <div>
          <h1> {house.name} </h1>
          <p>
            {house.adress}, {house.country}{' '}
          </p>
        </div>
        <DisplayModal onClick={toggle}>
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
        </DisplayModal>

        <ModalCarrousel isShowing={isShowing} hide={toggle} />

        <Information>
          <Description>
            <DescriptionLayout>
              <p>{house.describe_long}</p>
            </DescriptionLayout>
            <PageLayout>
              <EquipmentsLayout>
                <Equipments homeEquipments={house.home_equipment} />
              </EquipmentsLayout>
              <EquipmentContainer>
                <Showlist>
                  <InfoButton
                    type='button'
                    onClick={() =>
                      handleClick(
                        'activity',
                        displayActivities,
                        setDisplayActivities
                      )
                    }
                    className='dropDown-title'
                  >
                    <h3> Activités </h3>
                  </InfoButton>
                  <EquipmentList
                    className={`activity-list ${
                      displayActivities === 'activity' ? 'visible' : ''
                    }`}
                  >
                    <ul> {homeActivity} </ul>
                  </EquipmentList>
                  <InfoButton
                    type='button'
                    className='dropDown-title'
                    onClick={() =>
                      handleClick('options', displayOptions, setDisplayOptions)
                    }
                  >
                    <h3> Options de réservation </h3>
                  </InfoButton>
                  <EquipmentList
                    className={`options-list ${
                      displayOptions === 'options' ? 'visible' : ''
                    }`}
                  >
                    <MealContainer>
                      {mealOptions.map((repas) => (
                        <>
                          <button
                            type='button'
                            onClick={() =>
                              handleClick(
                                `${repas.name}`,
                                displayMeals,
                                setDisplayMeals
                              )
                            }
                          >
                            {' '}
                            <h3>{repas.name}</h3>{' '}
                          </button>
                          <ul
                            key={repas.id}
                            className={
                              displayMeals === `${repas.name}` ? '' : 'hidden'
                            }
                          >
                            {repas.Option.map((option) => (
                              <li>{option.name}</li>
                            ))}
                          </ul>
                        </>
                      ))}
                    </MealContainer>
                  </EquipmentList>
                  <InfoButton
                    type='button'
                    className='dropDown-title'
                    onClick={() =>
                      handleClick(
                        'condition',
                        displayConditions,
                        setDisplayConditions
                      )
                    }
                  >
                    <h3> Conditions d'annulation </h3>
                  </InfoButton>
                  <EquipmentList
                    className={`condition-list ${
                      displayConditions === 'condition' ? 'visible' : ''
                    }`}
                  >
                    <ul>
                      <li>{house?.renting_conditions.total}</li>
                      <li>{house?.renting_conditions.partial}</li>
                    </ul>
                  </EquipmentList>
                </Showlist>
              </EquipmentContainer>
            </PageLayout>
          </Description>

          <BookingForm house={house} id={id} />
        </Information>
      </Container>
    </>
  );
}

export default House;

const DescriptionLayout = styled.div`
  padding: 2rem 1rem;
  font-size: 1.2rem;
  font-weight: lighter;

  @media screen and (max-width: 600px) {
    width: 90%;
    font-size: 1.1rem;
  }
`;
const PageLayout = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
const EquipmentsLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
const MealContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  li {
    margin: 1rem 0;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  .hidden {
    display: none;
  }
`;
