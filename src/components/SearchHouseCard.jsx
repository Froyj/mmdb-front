import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from './styled-components/theme/colors';

function SearchHouseCard({ id, name, text, image, city, capacity, price }) {
  SearchHouseCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    capacity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  };

  return (
    <StyledLink to={`/maison/${id}`}>
      <HouseCard>
        <Image src={process.env.REACT_APP_API_URL + image} alt={name} />
        <TextDiv>
          <Description>
            <LeftContainer>
              <TitleSpan>{name}</TitleSpan>
              <CityCapacity>
                {city}
                <br />
                {capacity} personnes
              </CityCapacity>
            </LeftContainer>
            <Price>
              <PriceSpan>À partir de </PriceSpan>
              {price}€ /nuit
            </Price>
          </Description>
          <Résumé>{text}</Résumé>
        </TextDiv>
      </HouseCard>
    </StyledLink>
  );
}

export default SearchHouseCard;

const CityCapacity = styled.div``;

const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 0 1 calc((100% - 6em) / 3);
  text-decoration: none;
  color: ${colors.blue};
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  @media (max-width: 1024px) {
    flex-basis: calc((100% - 2em) / 2);
  }

  @media screen and (max-width: 580px) {
    flex-basis: 90%;
    margin: auto;
  }
`;

const HouseCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background-color: ${colors.lightGreen};
  box-shadow: 2px 5px 10px;
  height: 100%;
  :hover {
    transform: scale(1.04);
    transition: all 0.4s ease-in-out;
    box-shadow: 5px 10px 15px;
  }

  @media screen and (max-width: 768px) {
    height: 450px;
  }
`;

const Image = styled.img`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: 100%;
  height: 250px;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    height: 42%;
  }
`;

const TextDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 1.5em;
  margin: 1em auto;
  box-sizing: border-box;
`;

const Price = styled.p`
  display: flex;
  color: ${colors.green};
  font-weight: bolder;
  align-self: left;
  flex-direction: column;
  padding-left: 0.5rem;
  margin-top: 0.5rem;

  @media screen and (max-width: 768px) {
    text-align: left;
  }
`;
const PriceSpan = styled.span`
  font-size: 0.8rem;
  font-weight: lighter;
`;
const Résumé = styled.p`
  font-size: 0.9rem;
  font-weight: 100;
  text-align: justify;
  margin-top: 1rem;
`;
const TitleSpan = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${colors.green};

  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
    text-align: left;
  }
`;
const Description = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
