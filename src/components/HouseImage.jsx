import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import ImageContainer from './styled-components/ImageContainer';
import Image from './styled-components/Image';

function HouseImage ({ image }) {
    HouseImage.propTypes = {
        image: PropTypes.string.isRequired,
    }

    return (
        <HouseImageContainer>
        <ImageContainer>
            <Image src={image.image.principal} width="250px" height="250px" borderRadius="5px"/>
        </ImageContainer>
        <HouseName>{image.name}</HouseName>
        <HouseInfo>{image.city}</HouseInfo>
        <HouseInfo>{image.country}</HouseInfo>
        </HouseImageContainer> 
    );
}

const HouseImageContainer = styled.div`
    border-radius: 5px;
    padding: 5px;
    background: linear-gradient(315deg, rgba(186,155,92,1) 0%, rgba(28,44,70,1) 100%);
    color: white;
    cursor: pointer;

    &:hover{
        background: linear-gradient(315deg, rgba(186,155,92,1) 100%, rgba(28,44,70,1) 0%);
    }
`;

const HouseName = styled.h2`
    font-size: 1.3em;
`;

const HouseInfo = styled.h3`
    
`

export default HouseImage;