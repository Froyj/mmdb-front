import { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from "../helper/axios-config";
import Banner from "../components/styled-components/Banner";
import Global from "../components/styled-components/Global";
import ServicesPanel from "../components/ServicesPanel";

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
        </>
    );
}

const ServicesContainer = styled.div`
    width: auto;
    margin: auto;
    display: flex; 
`;


export default Services;