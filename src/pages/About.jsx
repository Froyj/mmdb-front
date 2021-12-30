import styled from "styled-components";

const About = () => (
        <MainContainer>
            <SecondContainer>
            <TitleAbout>Antoine Sellier</TitleAbout>
            <img src="../ressources/photo-antoine.jpeg" alt="Antoine Sellier" width="200px" height="200px" />
            <TextContainer>
            Bonjour, moi c’est Antoine Sellier et je suis le créateur de Ma Maison des Bois.  Après avoir passé mon enfance au milieu des bois, j’ai décidé en 2017 de m’engager dans la gestion de des forêts qui appartiennent à ma famille depuis 5 générations. A cette occasion, je me suis rendu compte qu’il fallait diversifier nos sources de revenus pour pérenniser nos forêts et ainsi mais aussi partager avec vous mes petits coins de paradis.
            </TextContainer>
            </SecondContainer>
            <TitleAbout>Ma Maison des Bois</TitleAbout>
            <TextContainer>
            Le projet est né en 2020 au sein de l’incubateur de Toulouse Buisness School : TBSeeds suite à la mise en lumière de 2 problématiques/constats : 
            </TextContainer>

        </MainContainer>
    );

const MainContainer = styled.div`
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

const SecondContainer = styled.div`
    flex-direction: column;
    text-align: center;
`;

const TextContainer = styled.div`
    text-align: justify;
    margin-bottom: 20px;
`;

const TitleAbout = styled.h1`

`;
export default About;