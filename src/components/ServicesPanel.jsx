import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import ImageContainer from './styled-components/ImageContainer';
import Image from './styled-components/Image';

function ServicesPanel ({service}) {
    ServicesPanel.propTypes = {
            service: PropTypes.string.isRequired,
        }

    return (
        <ServicesContainer>
            <ImageContainer>
                <Image src={service.img_url} width="200px" height="200px"/>
            </ImageContainer>
            <ServicesName>{service.name}</ServicesName>
            <ServicesDescription>{service.description}</ServicesDescription>

        </ServicesContainer>
    );
    };

    const ServicesContainer = styled.div`
    `;

    const ServicesName = styled.h2`
    `;

    const ServicesDescription = styled.p`
    `;

    export default ServicesPanel;