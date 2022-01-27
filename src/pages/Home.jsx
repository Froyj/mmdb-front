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
      <VideoContainer>
       <Video
        controls
        autoplay
        preload="auto"
        muted
        src="../ressources/video-home.mp4"
        type="video/mp4"
      />
      </VideoContainer>
        <Banner image="url('./ressources/Banner-Nos-maisons-forestières.jpg')">
        Nos maisons
        </Banner>
      <HouseContainer>
            {houseData
            .map((image) => <HouseImage key={image.id} id={image.id} image={image}/>)}
        </HouseContainer>
        <Banner image="url('./ressources/banner-nos-services.jpg')">
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

const VideoContainer = styled.div`
    width:100%;
    height: 39vw;
    margin-bottom: 30px;
 `;

const Video = styled.video`
   width: 100%;
   height: 100%;
   object-fit: cover;

   @media (max-width: 768px) {
     height: auto;
   }
 `;

const HouseContainer = styled.div`
    width : 100%;
    display: flex;
    justify-content: space-around;

  @media (max-width: 768px) {
    
    display: block;
    flex-direction: column;
    align-items: center;
    margin:auto;
    width:90%;
}
`;

const ServicesContainer = styled.div`
    width : 100%;
    display: flex;
    justify-content: space-around;

  @media (max-width: 768px) {
    display: block;
    flex-direction: column;
    align-items: center;
    margin:auto;
    width:90%;
}
`;

export default Home;
