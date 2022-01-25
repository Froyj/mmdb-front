import { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from "../helper/axios-config";
import TitleForm from '../components/styled-components/TitleForm';
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
    <Global>
        <MainContainer>
            <TitleForm> Nos Services </TitleForm>
            <ServicesContainer>
                {servicesData
                .map((service) => <ServicesPanel key={service.id} service={service} /> )}
            </ServicesContainer>
        </MainContainer>
     </Global>
    );
}

const MainContainer = styled.div`
`;

const ServicesContainer = styled.div`
`;


export default Services;