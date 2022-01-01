import styled from "styled-components";
import TextContainer from "../components/styled-components/TextContainer";
import SecondContainer from "../components/styled-components/SecondContainer";
import Image from "../components/styled-components/Image";
import ImageContainer from "../components/styled-components/ImageContainer";

const About = () => (
  <MainContainer>
    <SecondContainer>
      <img
        src="../ressources/photo-antoine.jpeg"
        alt="Antoine Sellier"
        width="300px"
        height="300px"
      />
      <TextContainer>
        <span>Antoine Sellier</span>
        Bonjour, moi c’est Antoine Sellier et je suis le créateur de{" "}
        <strong>Ma Maison des Bois</strong>. Après avoir passé mon enfance au
        milieu des bois, j’ai décidé en 2017 de m’engager dans la gestion de
        forêts qui appartiennent à ma famille depuis 5 générations. A cette
        occasion, je me suis rendu compte qu’il fallait diversifier nos sources
        de revenus pour pérenniser nos forêts et ainsi mais aussi partager avec
        vous mes petits coins de paradis.
      </TextContainer>
    </SecondContainer>
    <ImageContainer display="block">
      <Image
        src="../ressources/Logo-transparent.png"
        alt="Logo Ma maison des bois"
        width="400px"
        height="300px"
      />
    </ImageContainer>
    <ImageContainer>
      <Image
        src="../ressources/travaux1.jpeg"
        alt="Photo travaux"
        width="400px"
        height="300px"
        borderRadius="10%"
      />
      <Image
        src="../ressources/travaux3.jpeg"
        alt="Photo travaux"
        width="300px"
        height="300px"
        borderRadius="10%"
      />
      <Image
        src="../ressources/travaux2.jpeg"
        alt="Photo travaux"
        width="400px"
        height="300px"
        borderRadius="10%"
      />
    </ImageContainer>
    <TextContainer paddingTop="35px" paddingBottom="35px">
      Le projet est né en 2020 au sein de l’incubateur de Toulouse Buisness
      School : TBSeeds suite à la mise en lumière de 2 problématiques/constats :
      <ListContainer>
        <br />
        <li>
          Les propriétaires forestiers ont besoin de diversifier leur source de
          revenus pour préserver leur forêt.
        </li>
        <br />
        <li>
          Un nouveau tourisme (tourisme vert) émerge autour de trois grands
          piliers : la découverte de la nature, de la gastronomie locale, et de
          la culture locale.{" "}
        </li>
        <br />
      </ListContainer>
      Ma Maison des Bois a donc été créée pour accompagner les propriétaires
      forestiers dans la rénovation et la gestion de leurs maisons forestières
      afin de les proposer à la location et de répondre ainsi à une nouvelle
      demande touristique.
    </TextContainer>
    <TitleAbout>Nos Engagements</TitleAbout>
    <ImageContainer>
      <Image
        src="../ressources/travaux4.jpeg"
        alt="Photo travaux"
        width="400px"
        height="300px"
        borderRadius="10%"
      />
      <Image
        src="../ressources/travaux5.jpeg"
        alt="Photo travaux"
        width="400px"
        height="300px"
        borderRadius="10%"
      />
    </ImageContainer>
    <EngagementContainer>
      <Image
        src="../ressources/engagement1.png"
        alt="Image planete et plante"
        width="100px"
        height="100px"
      />
      <TextContainerEngagement>
        Offrir aux propriétaires un accompagnement de qualité et respectueux de
        l’environnement pour rénover de façon écologique les maisons
        forestières.
      </TextContainerEngagement>
    </EngagementContainer>

    <EngagementContainer>
      <Image
        src="../ressources/engagement2.png"
        alt="Image oiseau et feuille"
        width="100px"
        height="100px"
      />
      <TextContainerEngagement>
        Assurer aux hôtes, confort et services de grande qualité. Faire
        découvrir des lieux uniques : mettre en place des activités pour
        découvrir la faune et la flore qui évoluent autour des maisons
        forestières.
      </TextContainerEngagement>
    </EngagementContainer>
    <EngagementContainer>
      <Image
        src="../ressources/engagement3.png"
        alt="Image argent dans la main"
        width="100px"
        height="100px"
      />
      <TextContainerEngagement>
        Participer à la préservation des milieux naturels et à la création de
        richesse dans les communes rurales, (en reversant une partie du chiffre
        d’affaires aux propriétaires forestiers pour entretenir les espaces
        naturels)
      </TextContainerEngagement>
    </EngagementContainer>
    <ImageContainer>
      <Image
        src="../ressources/travaux7.jpeg"
        alt="Photo"
        width="300px"
        height="300px"
        borderRadius="10%"
      />
      <Image
        src="../ressources/travaux6.jpeg"
        alt="Logo Ma maison des bois"
        width="400px"
        height="300px"
        borderRadius="10%"
      />
      <Image
        src="../ressources/travaux8.jpeg"
        alt="Photo"
        width="300px"
        height="300px"
        borderRadius="10%"
      />
    </ImageContainer>
  </MainContainer>
);

const TitleAbout = styled.h1`
  text-align: center;
  padding: 30px 30px;
`;

const MainContainer = styled.div`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  color: #1c2c46;
`;

const EngagementContainer = styled.div`
  display: flex;
  margin: 20px 20px;
`;

const TextContainerEngagement = styled.div`
  margin: auto;
  text-align: justify;
  font-size: 1.3em;
  width: 75%;
`;

const ListContainer = styled.ul`
  list-style: inside;
  text-align: justify;
`;

export default About;
