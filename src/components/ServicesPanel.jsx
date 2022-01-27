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
    height: 60%;
`;

const TitleSpan = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${colors.green};
    text-align: center;
    margin-top: 20px;
`;

const ServicesDescription = styled.p`
    text-align: center;
    margin-top: 20px;
`;

export default ServicesPanel;