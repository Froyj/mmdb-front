import { PropTypes } from "prop-types";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import colors from "./styled-components/theme/colors";

function HouseImage({ id, image }) {
  HouseImage.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  };

  return (
    <StyledLink to={`/maison/${id}`}>
      <Image src={process.env.REACT_APP_API_URL + image.image.principal} />
      <TextContainer>
        <h2>{image.name}</h2>
        <City>{image.city}</City>
        <p>{image.country}</p>
      </TextContainer>
    </StyledLink>
  );
}

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${colors.blue};
  height: 90%;
  flex: 0 0 20%;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background-color: ${colors.lightGreen};
  box-shadow: 2px 5px 10px;
  margin: 3rem 1rem;
  transition-duration: 0.5s;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  :hover {
    transform: scale(1.1);
    transition: all 0.4s ease-in-out;
    box-shadow: 5px 10px 15px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    margin: auto;
    margin-bottom: 15px;
  }
`;
const Image = styled.img`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: 100%;
  height: 200px;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  align-items: center;
  height: 100px;

  h2 {
    color: ${colors.green};
    margin-bottom: 0.5rem;
  }
`;
const City = styled.p`
  font-weight: bold;
`;

export default HouseImage;
