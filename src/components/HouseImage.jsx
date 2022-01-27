import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import colors from './styled-components/colors';

function HouseImage ({ id, image }) {
    HouseImage.propTypes = {
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }

    return (
        <StyledLink to={`/Maison/${id}`}>
        <HouseCard>
            <Image src={image.image.principal} />
            <TitleSpan>{image.name}</TitleSpan>
         <TitleSpan>{image.city}</TitleSpan>
        <TitleSpan>{image.country}</TitleSpan>
        </HouseCard> 
        </StyledLink>
    );
};

const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: ${colors.blue};
    width: 32%;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

const HouseCard = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    background-color: ${colors.lightGreen};
    margin: 1rem;
    height: 30rem;
    box-shadow: 10px 10px 15px;
    width: 100%;

    @media (max-width: 768px){
        display: flex;
        flex-direction: column;
        text-align: center;
        width: 100%;
        margin : auto;
        margin-bottom: 15px;
    }
`;

const Image = styled.img`
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    height: 60%;
`;

const TitleSpan = styled.span`
    margin-top: 20px;
    font-size: 2em;
    font-weight: bold;
    color: ${colors.green};
    text-align: center;
`;

export default HouseImage;