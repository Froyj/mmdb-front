import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "../helper/axios-config";
import HouseImage from "../components/HouseImage";
import Activities from "../components/Activities";
import Banner from "../components/styled-components/Banner";

function Home() {
    const [houseData, setHouseData] = useState([]);
    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
        axios
        .get("/home_to_rent")
        .then((res) => {
            setHouseData(res.data);
        });
    }, []);

    useEffect(() =>{
        axios
        .get("/activities")
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
        muted
        src="../ressources/video-home.mp4"
        type="video/mp4"
      />
        <Banner image="url('./resources/Banner-Nos-maisons-forestières.jpg')">
        Nos maisons
        </Banner>
      <HouseContainer>
            {houseData
            .map((image) => <HouseImage key={image.id} image={image}/>)}
        </HouseContainer>
        <Banner image="url('./resources/Banner-Nos-maisons-forestières.jpg')">
          Nos services
          </Banner>
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
