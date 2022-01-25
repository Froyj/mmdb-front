import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ImageContainer from './styled-components/ImageContainer';
import Image from './styled-components/Image';

function HouseImage ({ image }) {
    HouseImage.propTypes = {
        image: PropTypes.string.isRequired,
    }

    return (
        <Link to='/Maison/:id'>
        <HouseImageContainer>
        <ImageContainer>
            <Image src={image.image.principal} width="250px" height="250px" borderRadius="5px"/>
        </ImageContainer>
        <HouseName>{image.name}</HouseName>
        <HouseInfo>{image.city}</HouseInfo>
        <HouseInfo>{image.country}</HouseInfo>
        </HouseImageContainer> 
        </Link>
    );
}

const HouseImageContainer = styled.div`
    border-radius: 5px;
    padding: 5px;
    background: linear-gradient(315deg, rgba(186,155,92,1) 0%, rgba(28,44,70,1) 100%);
    color: white;
    cursor: pointer;
    text-align:center;
    width: 300px;

    &:hover{
        background: linear-gradient(315deg, rgba(186,155,92,1) 100%, rgba(28,44,70,1) 0%);
    }

    @media (max-width: 768px){
        display: flex;
        flex-direction: column;
        text-align: center;
        width: 100%;
        margin : auto;
        margin-bottom: 15px;

    &:hover{
        background: linear-gradient(315deg, rgba(186,155,92,1) 100%, rgba(28,44,70,1) 0%);
    }
    }
`;

const HouseName = styled.h2`
    font-size: 1.3em;
`;

const HouseInfo = styled.h3`
    
`

export default HouseImage;