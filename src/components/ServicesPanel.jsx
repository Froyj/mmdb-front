import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import colors from './styled-components/colors';

function ServicesPanel ({service}) {
    ServicesPanel.propTypes = {
            service: PropTypes.string.isRequired,
        }

    return (
        <>
            <ServiceCard>
                <Image src={service.img_url}/>
             <TitleSpan>{service.name}</TitleSpan>
            <ServicesDescription>{service.description}</ServicesDescription>
            </ServiceCard>
        </>
    );
    };

    const ServiceCard = styled.div`
        display: flex;
        flex-direction: column;
        border-radius: 15px;
        background-color: ${colors.lightGreen};
        margin: 1rem;
        height: 30rem;
        box-shadow: 10px 10px 15px;
        width: 50%;
`;

const Image = styled.img`
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    height: 60%;
`;

const TitleSpan = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${colors.green};
    text-align: center;
`;

const ServicesDescription = styled.p`
    text-align: center;
`;

export default ServicesPanel;