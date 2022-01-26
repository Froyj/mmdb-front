import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import styled from "styled-components";
import colors from "./styled-components/colors";

function SearchHouseCard({ id, name, text, image, city, capacity, price }) {
    SearchHouseCard.propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        capacity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired
      }

    return (
        <StyledLink to={`/maison/${id}`}>
            <HouseCard> 
                <Image src={image} alt={name} />
                <TextDiv>
                    <TitleAndPrice>
                        <Title>
                            <TitleSpan>{name}</TitleSpan>
                            <br />{city}
                            <br />{capacity} personnes
                        </Title>
                        <Price>
                            <PriceSpan>A partir de </PriceSpan>
                            <br />{price}€ /nuit
                        </Price>
                    </TitleAndPrice>
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
`
const Image = styled.img`
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    height: 60%;
`
const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
`
const TitleAndPrice = styled.div`
    display: flex;
    justify-content: space-between;
`
const Title = styled.p`
    display: flex;
    flex-direction: column;
`
const Price = styled.p`
    display: flex;
    width: auto;
    color: ${colors.green};
    font-weight: bolder;
    align-self: center;
    flex-direction: column;
    padding-left: .5rem;
`
const PriceSpan = styled.span`
    font-size: .8rem;
    font-weight: lighter;
`
const Résumé = styled.p`
    font-size: .9rem;
    font-weight: 100;
    text-align: justify;
    margin-top: 1rem;
`
const TitleSpan = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${colors.green}
`