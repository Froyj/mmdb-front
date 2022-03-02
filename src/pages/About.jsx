import styled from "styled-components";

import Global from "../components/styled-components/theme/Global";
import TextContainer from "../components/common/containers/TextContainer";
import SecondContainer from "../components/common/containers/SecondContainer";
import Image from "../components/common/Image";
import ImageContainer from "../components/common/containers/ImageContainer";
import Navigation from "../components/layout/Navigation";

const About = () => (
  <>
  <Navigation />
  <Global>
    <SecondContainer>
      <ImageContainer>
        <Image
            src="../ressources/photo-antoine.jpeg"
            alt="Antoine Sellier"
            width="200px"
            height="200px"
            mediaMargin="1rem"
          />
      </ImageContainer>
      <TextContainer borderBottom="none" borderTop ="none">
        <span>Antoine Sellier</span>
        Bonjour, moi c’est Antoine Sellier et je suis le créateur de{" "}
        <strong>Ma Maison des Bois</strong>. Après avoir passé mon enfance au
        milieu des bois, j’ai décidé en 2017 de m’engager dans la gestion de
        forêts qui appartiennent à ma famille depuis 5 générations. À cette
        occasion, je me suis rendu compte qu’il fallait diversifier nos sources
        de revenus pour pérenniser nos forêts et ainsi partager avec
        vous mes petits coins de paradis.
      </TextContainer>
    </SecondContainer>
    <ImageContainer>
      <Image
        src="../ressources/travaux1.jpeg"
        alt="Photo travaux"
        height="17rem"
        borderRadius="5%"
        boxShadow="5px 5px 15px"
        transform="scale(1.05)"
        transition="all .4s ease-in-out"
      />
      <Image
        src="../ressources/travaux4.jpeg"
        alt="Photo travaux"
        height="17rem"
        borderRadius="5%"
        boxShadow="5px 5px 15px"
        transform="scale(1.05)"
        transition="all .4s ease-in-out"
      />
      <Image
        src="../ressources/travaux2.jpeg"
        alt="Photo travaux"
        height="17rem"
        borderRadius="5%"
        boxShadow="5px 5px 15px"
        transform="scale(1.05)"
        transition="all .4s ease-in-out"
      />
    </ImageContainer>
    <TextContainer paddingTop="35px" paddingBottom="35px">
      Le projet est né en 2020 au sein de l’incubateur de Toulouse Business
      School : TBSeeds suite à la mise en lumière de deux problématiques/constats :
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
      <ImageContainer>
        <Image
          src="../ressources/travaux3.jpeg"
          alt="Photo travaux"
          height="18rem"
          borderRadius="5%"
          boxShadow="5px 5px 15px"
          transform="scale(1.05)"
          transition="all .4s ease-in-out"
        />
        <Image
          src="../ressources/travaux5.jpeg"
          alt="Photo travaux"
          height="18rem"
          borderRadius="5%"
          boxShadow="5px 5px 15px"
          transform="scale(1.05)"
          transition="all .4s ease-in-out"
        />
        <Image
          src="../ressources/travaux7.jpeg"
          alt="Photo"
          height="18rem"
          borderRadius="5%"
          boxShadow="5px 5px 15px"
          transform="scale(1.05)"
          transition="all .4s ease-in-out"
        />
        <Image
          src="../ressources/travaux6.jpeg"
          alt="Logo Ma maison des bois"
          height="18rem"
          borderRadius="5%"
          boxShadow="5px 5px 15px"
          transform="scale(1.05)"
          transition="all .4s ease-in-out"
        />
        <Image
          src="../ressources/travaux8.jpeg"
          alt="Photo"
          height="18rem"
          borderRadius="5%"
          boxShadow="10px 10px 15px"
          transform="scale(1.05)"
          transition="all .4s ease-in-out"
      />
    </ImageContainer>
    </TextContainer>
    <TitleAbout>Nos Engagements</TitleAbout>

    <NosEngagements>
      <EngagementContainer>
        <Image
          src="../ressources/engagement1.png"
          alt="Image planete et plante"
          margin="0"
          mediaWidth="20%"
          mediaHeight="auto"
          mediaMarginRight="1.5rem"
        />
        <TextContainerEngagement>
          Offrir aux propriétaires un accompagnement de qualité et respectueux de
          l’environnement pour rénover de façon écologique les maisons
          forestières.
        </TextContainerEngagement>
      </EngagementContainer>
      <EngagementContainer>
        <Image
          src="../ressources/engagement4.png"
          alt=" image feuille et cerf"
          margin="0"
          mediaWidth="20%"
          mediaHeight="auto"
          mediaMarginRight="1.5rem"
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
          margin="0"
          mediaWidth="20%"
          mediaHeight="auto"
          mediaMarginRight="1.5rem"
        />
        <TextContainerEngagement>
          Participer à la préservation des milieux naturels et à la création de
          richesse dans les communes rurales, (en reversant une partie du chiffre
          d’affaires aux propriétaires forestiers pour entretenir les espaces
          naturels).
        </TextContainerEngagement>
      </EngagementContainer>
    </NosEngagements>
  </Global>
  </>
);

export default About;


const TitleAbout = styled.h1`
  text-align: center;
  padding: 30px 30px;
`
const NosEngagements = styled.div`
  width: 90%;
  align-self:center;
  margin-bottom: 3rem;
`
const EngagementContainer = styled.div`
  display: flex;
  margin: 20px 20px;

  @media (max-width: 768px) {
  display: flex;
  line-height: 1.3em;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
`;

const TextContainerEngagement = styled.div`
  margin: auto;
  text-align: justify;
  font-size: 16px;
  width: 75%;

  @media (max-width: 768px) {
  line-height: 1.3em;
  width: 80%;
}
`;

const ListContainer = styled.ul`
  list-style: inside;
  text-align: justify;
`;