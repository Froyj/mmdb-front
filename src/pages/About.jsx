import styled from "styled-components";

const About = () => (
  <MainContainer>
    <SecondContainer>
      <TitleAbout>Antoine Sellier</TitleAbout>
      <img
        src="../ressources/photo-antoine.jpeg"
        alt="Antoine Sellier"
        width="300px"
        height="300px"
      />
      <TextContainer>
        Bonjour, moi c’est Antoine Sellier et je suis le créateur de Ma Maison
        des Bois. Après avoir passé mon enfance au milieu des bois, j’ai décidé
        en 2017 de m’engager dans la gestion de forêts qui appartiennent à ma
        famille depuis 5 générations. A cette occasion, je me suis rendu compte
        qu’il fallait diversifier nos sources de revenus pour pérenniser nos
        forêts et ainsi mais aussi partager avec vous mes petits coins de
        paradis.
      </TextContainer>
    </SecondContainer>
    <ImageContainer>
      <Image
        src="../ressources/Logo-transparent.png"
        alt="Logo Ma maison des bois"
      />
    </ImageContainer>
    <TextContainer>
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
    <EngagementContainer>
    <Image src="../ressources/engagement1.png" alt="Image planete et plante" width= "100px" height= "100px" />
    <TextContainerEngagement>
    Offrir aux propriétaires un accompagnement de qualité et respectueux de
    l’environnement pour rénover de façon écologique les maisons forestières.
    </TextContainerEngagement>
    </EngagementContainer>

    <EngagementContainer>
    <Image src="../ressources/engagement2.png" alt="Image planete et plante" width= "100px" height= "100px" />
    <TextContainerEngagement>
    Assurer aux hôtes, confort et services de grande qualité. Faire découvrir
    des lieux uniques : mettre en place des activités pour découvrir la faune et
    la flore qui évoluent autour des maisons forestières.
    </TextContainerEngagement>
    </EngagementContainer>

    <EngagementContainer>
    <Image src="../ressources/engagement3.png" alt="Image planete et plante" width= "100px" height= "100px" />
    <TextContainerEngagement>
    Participer à la
    préservation des milieux naturels et à la création de richesse dans les
    communes rurales, (en reversant une partie du chiffre d’affaires aux
    propriétaires forestiers pour entretenir les espaces naturels)
    </TextContainerEngagement>
    </EngagementContainer>
  </MainContainer>
);

const TitleAbout = styled.h1`
    text-align: center;
    padding: 30px 30px;
`;

const MainContainer = styled.div`
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: #1c2c46;
`;

const SecondContainer = styled.div`
    flex-direction: column;
    text-align: center;
    padding: 20px;

    img{
        border-radius: 50%;
    }
`;

const EngagementContainer = styled.div`
    display: flex;
    margin: 20px 20px;
`
const TextContainer = styled.div`
    width: 85%;
    margin: auto;
    padding-top: 15px;
    margin-bottom: 20px;
    font-size: 1.3em;
`;

const TextContainerEngagement = styled.div`
    text-align: justify;
    font-size: 1.3em;
    margin: auto;
    width: 75%;
`;

const ListContainer = styled.ul`
    list-style: inside;
    text-align: justify;
`;

const ImageContainer = styled.div`
    text-align: center;
`;

const Image = styled.img`
    border-radius: 50%;
`;

export default About;