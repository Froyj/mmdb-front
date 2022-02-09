import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
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
    price: PropTypes.number.isRequired,
  };

  return (
    <StyledLink to={`/maison/${id}`}>
      <HouseCard>
        <Image src={process.env.REACT_APP_API_URL + image} alt={name} />
        <TextDiv>
          <Head>
            <Title>
              <TitleSpan>{name}</TitleSpan>
            </Title>
            <CityCapacity>
              {city}
              <br />
              {capacity} personnes
            </CityCapacity>
            </Head>
            <br />
          <Price>
            <PriceSpan>À partir de </PriceSpan>
            {price}€ /nuit
          </Price>
          <Résumé>{text}</Résumé>
        </TextDiv>
      </HouseCard>
    </StyledLink>
  );
}

export default SearchHouseCard;

const CityCapacity = styled.div``;
const Head = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${colors.blue};
  width: 32%;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const HouseCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background-color: ${colors.lightGreen};
  margin: 1rem;
  box-shadow: 2px 5px 10px;
  margin-bottom: 1rem;
  height: 450px;
  width: 80%;
  margin-bottom: 74px;

  :hover {
    transform: scale(1.06);
    transition: all 0.4s ease-in-out;
    box-shadow: 5px 10px 15px;
  }
`;

const Image = styled.img`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 200px;
  object-fit: cover;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-top: 15px;
`;

const Title = styled.p`
  display: flex;
  flex-direction: column;
`;
const Price = styled.p`
  display: flex;
  width: auto;
  color: ${colors.green};
  font-weight: bolder;
  align-self: left;
  flex-direction: column;
  padding-left: 0.5rem;
`;
const PriceSpan = styled.span`
  font-size: 0.8rem;
  font-weight: lighter;
`;
const Résumé = styled.p`
  font-size: 0.9rem;
  font-weight: 100;
  text-align: justify;
  padding: 0.5rem;
  margin-top: 1rem;
`;
const TitleSpan = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${colors.green};
`;
