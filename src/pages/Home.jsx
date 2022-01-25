import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
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
      <TitleForm  marginTop="30px" textDecoration="underline">Nos Maisons</TitleForm>
      <HouseContainer>
            {houseData
            .map((image) => <HouseImage key={image.id} image={image}/>)}
        </HouseContainer>
        <TitleForm marginTop="30px" textDecoration="underline">Nos Services</TitleForm>
       <ServicesContainer>
            {servicesData
            .filter((el) => el.id === 1 || el.id === 2 || el.id === 5)
            .map((activities) => <Activities key={activities.id} activities={activities}/>)}
       </ServicesContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  margin-bottom: 30px;
`;

const HouseContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 50px 50px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    text-align: center;
}
`;

const ServicesContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 50px 50px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    text-align: center;
}
`;

export default Home;
