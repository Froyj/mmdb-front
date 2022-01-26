import { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from "../helper/axios-config";
import Banner from "../components/styled-components/Banner";
import Global from "../components/styled-components/Global";
import ServicesPanel from "../components/ServicesPanel";
import colors from "../components/styled-components/colors";

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
        <Banner image="url('./ressources/banner-nos-services.jpg')">
             Nos Services 
        </Banner>
        <Global>
            <ServicesContainer>
                {servicesData
                .map((service) => <ServicesPanel key={service.id} service={service} /> )}
            </ServicesContainer>
        </Global>
        <Banner image="url('./ressources/banner-activites-exterieures.jpg')">Activités extérieurs</Banner>
        <Global>
        <ActivitiesContainer>
        <ActivitieCard>
            <Image src="./ressources/visite-chateau.jpeg" alt ="chateau-cathare"/>
            <TitleSpan>Visites des châteaux cathares</TitleSpan>
        </ActivitieCard>
        <ActivitieCard>
            <Image src="./ressources/rafting.jpeg" alt ="rafting"/>
            <TitleSpan>Rafting</TitleSpan>
        </ActivitieCard>
        <ActivitieCard>
            <Image src="./ressources/ballade-cheval.jpeg" alt ="ballade a cheval"/>
            <TitleSpan>Ballade à cheval</TitleSpan>
        </ActivitieCard>
        <ActivitieCard>
            <Image src="./ressources/chamois.jpg" alt ="chamois"/>
            <TitleSpan>Découverte de la Faune et de la Flore</TitleSpan>
        </ActivitieCard>
        <ActivitieCard>
            <Image src="./ressources/gastronomie-locale.jpg" alt ="gastronomie"/>
            <TitleSpan>Découverte de la gastronomie locale</TitleSpan>
        </ActivitieCard>
        </ActivitiesContainer>
        </Global>
        
        </>
    );
}
const ActivitiesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const ActivitieCard = styled.div`
        display: flex;
        flex-direction: column;
        border-radius: 15px;
        background-color: ${colors.lightGreen};
        margin: 1.7rem;
        height: 25rem;
        box-shadow: 10px 10px 15px;
        width: 30%;

        @media (max-width: 768px){
            width: 90%;
        }
`;

const Image = styled.img`
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    height: 75%;
`;

const TitleSpan = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${colors.green};
    text-align: center;
    margin-top: 20px;
`;

const ServicesContainer = styled.div`
    width: 100%;
    margin: auto;
    display: flex; 
    flex-wrap: wrap;

    @media (max-width: 768px){
        display: flex;
        flex-direction: column; 
        align-items: center;  
    }
`;


export default Services;