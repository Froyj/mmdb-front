import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Submitbutton from "../components/styled-components/SubmitButton";
import HouseImage from "../components/HouseImage";
import TitleForm from "../components/styled-components/TitleForm";
import Activities from "../components/Activities";

function Home() {
    const [houseData, setHouseData] = useState([]);
    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:5000/home_to_rent")
        .then((res) => {
            setHouseData(res.data);
        });
    }, []);

    useEffect(() =>{
        axios
        .get("http://localhost:5000/activities")
        .then((res) => {
            setServicesData(res.data);
        })
    }, []);

  return (
    <MainContainer>
      <Video
        controls
        autoplay
        preload="auto"
        src="../ressources/video-home.mp4"
        type="video/mp4"
      />
      <FilterContainer>
          <OneFilter>
        <Label>Où partez-vous ?</Label>
        <Select size="1">
          <option value="1">Auvergne-Rhône-Alpes</option>
          <option value="2">Bourgogne-Franche-Comté</option>
          <option value="3">Bretagne</option>
          <option value="4">Centre-Val de Loire</option>
          <option value="5">Corse</option>
          <option value="6">Grand-Est</option>
          <option value="7">Guadeloupe</option>
          <option value="8">Guyane</option>
          <option value="9">Hauts-de-France</option>
          <option value="10">Ile-de-France</option>
          <option value="11">Martinique</option>
          <option value="12">Mayotte</option>
          <option value="13">Normandie</option>
          <option value="14">Nouvelle-Aquitaine</option>
          <option value="15">Occitanie</option>
          <option value="16">Pays de la Loire</option>
          <option value="17">Provence-Alpes-Côte d'Azur</option>
          <option value="18">Réunion</option>
        </Select>
        </OneFilter>
        <OneFilter>
            <Label>A partir de quand ?</Label>
            <Input type="date"/>
        </OneFilter>
        <OneFilter>
            <Label>Jusqu'à quand ?</Label>
            <Input type="date"/>
        </OneFilter>
        <OneFilter>
            <Label>Nombres de voyageurs</Label>
            <Select size="1">
            <option value="1">1 </option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
            </Select>
        </OneFilter>
        <OneFilter>
            <Submitbutton width="125px">Rechercher</Submitbutton>
        </OneFilter>
      </FilterContainer>
      <TitleForm  marginTop="30px" >Nos Maisons</TitleForm>
      <HouseContainer>
            {houseData
            .map((image) => <HouseImage key={image.id} image={image}/>)}
        </HouseContainer>
        <TitleForm marginTop="30px">Nos Services</TitleForm>
       <ServicesContainer>
            {servicesData
            .filter((el) => el.id === 1 || el.id === 2 || el.id === 5)
            .map((activities) => <Activities key={activities.id} activities={activities}/>)}
       </ServicesContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
`
;

const Video = styled.video`
  width: 100%;
  height: 100%;
  margin-bottom: 30px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const OneFilter = styled.div`
    display: flex;
    flex-direction: column;
`;

const Select = styled.select`
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

const Label = styled.label`
`;

const Input = styled.input`
   background-color: #1c2c46;
   color: white;
   font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

const HouseContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

const ServicesContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

export default Home;
