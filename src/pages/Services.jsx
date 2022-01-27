import { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from "../helper/axios-config";
import Banner from "../components/styled-components/Banner";
import Global from "../components/styled-components/Global";
import ServicesPanel from "../components/ServicesPanel";
import TitleSpan from "../components/styled-components/TitleSpan";
import Card from "../components/styled-components/Card";

function Services() {
    const [servicesData, setServicesData] = useState([]);

    useEffect (() => {
        axios
        .get("/activities")
        .then((res) => {
            setServicesData(res.data);
        })
    }, []);

    return (
        <>
        <Banner backgroundPosition="center" marginTop = "none" marginBottom="0.5em" image="url('./ressources/banner-nos-services.jpg')">
             Nos Services 
        </Banner>
        <Global>
            <ServicesContainer>
                {servicesData
                .map((service) => <ServicesPanel key={service.id} service={service} /> )}
            </ServicesContainer>
        </Global>
        <Banner backgroundPosition="bottom" marginTop = "2em" marginBottom="0.5em" image="url('./ressources/banner-activites-exterieures.jpg')">Activités extérieurs</Banner>
        <Global>
        <ActivitiesContainer>
        <Card>
            <Image src="./ressources/visite-chateau.jpeg" alt ="chateau-cathare"/>
            <TitleSpan>Visites des châteaux cathares</TitleSpan>
        </Card>
        <Card>
            <Image src="./ressources/rafting.jpeg" alt ="rafting"/>
            <TitleSpan>Rafting</TitleSpan>
        </Card>
        <Card>
            <Image src="./ressources/ballade-cheval.jpeg" alt ="ballade a cheval"/>
            <TitleSpan>Ballade à cheval</TitleSpan>
        </Card>
        <Card>
            <Image src="./ressources/chamois.jpg" alt ="chamois"/>
            <TitleSpan>Découverte de la Faune et de la Flore</TitleSpan>
        </Card>
        <Card>
            <Image src="./ressources/gastronomie-locale.jpg" alt ="gastronomie"/>
            <TitleSpan>Découverte de la gastronomie locale</TitleSpan>
        </Card>
        </ActivitiesContainer>
        </Global>
        </>
    );
}
const ActivitiesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 3em;
`;

const Image = styled.img`
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    height: 75%;
`;

const ServicesContainer = styled.div`
    width: 100%;
    margin: auto;
    display: flex; 
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 768px){
        display: flex;
        flex-direction: column; 
        align-items: center;  
    }
`;

export default Services;