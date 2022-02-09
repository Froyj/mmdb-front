import { PropTypes } from "prop-types";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import colors from "./styled-components/colors";

function Activities({ activities }) {
  Activities.propTypes = {
    activities: PropTypes.string.isRequired,
  };

  return (
    <StyledLink to="/services">
      <ActivitiesCard>
        <Image src={activities.img_url} />
        <h2>{activities.name}</h2>
      </ActivitiesCard>
    </StyledLink>
  );
}

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${colors.blue};
  width: 18%;
  margin: 3rem 1.5rem;
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
    transition: all 0.5s ease-in-out;
  }
`;

const ActivitiesCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background-color: ${colors.lightGreen};
  height: 24rem;
  box-shadow: 10px 10px 15px;

  h2 {
    text-align: center;
    margin: 2rem 1.5rem;
    color: ${colors.green};
    font-size: 1.3rem;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    height: 20rem;
    margin: auto;
    margin-bottom: 15px;
  }
`;

const Image = styled.img`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 60%;
  object-fit: cover;
`;

export default Activities;
