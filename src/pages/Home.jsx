import { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../components/styled-components/colors";
import axios from "../helper/axios-config";
import HouseImage from "../components/HouseImage";
import Activities from "../components/Activities";
import Banner from "../components/styled-components/Banner";
import Global from "../components/styled-components/Global";

function Home() {
  const [houseData, setHouseData] = useState([]);
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    axios.get("/home_to_rent").then((res) => {
      setHouseData(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("/activities").then((res) => {
      setServicesData(res.data);
    });
  }, []);

  return (
    <>
      <VideoContainer>
        <Video
          autoPlay
          muted
          type="video/mp4"
          src="../ressources/video-home.mp4#t=2"
        />
      </VideoContainer>
      <Banner
        image="url('./ressources/Banner-Nos-maisons-forestières.jpg')"
        fontSize="2rem"
        height="15rem"
        marginTop="0"
        backgroundPosition="center center"
      >
        <Title> Découvrez nos maisons forestières </Title>
      </Banner>
      <Global>
        <Container>
          {houseData.map((image) => (
            <HouseImage key={image.id} id={image.id} image={image} />
          ))}
          <BlankCard>
            <h3>Et d'autres maisons forestières à venir ...</h3>
          </BlankCard>
        </Container>

        <Title> Agrémentez votre séjour avec nos services </Title>
        <Container>
          {servicesData
            .filter((el) => el.id === 1 || el.id === 2 || el.id === 5)
            .map((activities) => (
              <Activities key={activities.id} activities={activities} />
            ))}
        </Container>
      </Global>
    </>
  );
}

const VideoContainer = styled.div`
  width: 100%;
  height: 90vh;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 30%;
  align-items: center;
  justify-content: center;
  display: flex;

  @media (max-width: 768px) {
    display: block;
    flex-direction: column;
    align-items: center;
    margin: auto;
    width: 90%;
    margin-bottom: 2rem;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin: 2rem 0;
`;
const BlankCard = styled.div`
  display: flex;
  width: 18%;
  background-color: ${colors.lightGreen};
  border-radius: 15px;
  box-shadow: 10px 10px 15px;
  margin: 3rem 1rem;
  height: 90%;
  padding: 10% 1rem;
  justify-content: center;
  align-items: center;
  text-align: center;

  :hover {
    transform: scale(1.1);
    transition: all 0.4s ease-in-out;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: 0;
  }
`;
export default Home;
