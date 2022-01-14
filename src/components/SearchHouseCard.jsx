import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import styled from "styled-components";
import colors from "./styled-components/colors";

function SearchHouseCard({ id, name, text, image, city, capacity }) {
    SearchHouseCard.propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        capacity: PropTypes.number.isRequired,
      }

    return (
        <StyledLink to={`/Maison/${id}`}>
            <HouseCard> 
                <Image src={image} alt={name} />
                <TextDiv>
                    <Title>
                            <TitleSpan>{name}</TitleSpan>
                            <br />{city}
                            <br />{capacity} personnes
                    </Title>
                    <Résumé>
                        {text}
                    </Résumé>
                </TextDiv>
            </HouseCard>
        </StyledLink>

    )
}

export default SearchHouseCard;

const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: ${colors.blue};

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`
const HouseCard = styled.div`
    display: flex;
    border-radius: 15px;
    background-color: ${colors.lightGreen};
    margin: 1rem;
    height: 11rem;
`
const Image = styled.img`
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
`
const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
`
const Title = styled.p`
    display: flex;
    flex-direction: column;
`
const Résumé = styled.p`
    font-size: .8rem;
    font-weight: 100;
    text-align: justify;
    margin-top: 1rem;
`
const TitleSpan = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
`