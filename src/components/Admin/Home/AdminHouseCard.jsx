import styled from "styled-components";
import { PropTypes } from "prop-types";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import deleteHouses from "../../../data/deleteHouses";
import getHouses from "../../../data/houses";
import colors from "../../styled-components/theme/colors";
import BlankTitle from "../../common/titles/BlankTitle";

function AdminHouseCard({ id, name, image, setHouses }) {
  AdminHouseCard.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    setHouses: PropTypes.func.isRequired,
  };

  const deleteHouse = () => {
    if (window.confirm("Êtes-vous sur de vouloir supprimer la maison ?")) {
      deleteHouses(id);
    }
    return setTimeout(() => {
      toast.success("Maison supprimée !", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      getHouses(setHouses);
    }, 100);
  };

  return (
    <Card>
      <StyledLink to={`/maison/${id}`}>
        <img src={process.env.REACT_APP_API_URL + image} alt={name} />
      </StyledLink>
      <BlankTitle color={colors.blue}>{name}</BlankTitle>
      <Buttons>
        <NavLink to={`/maison/${id}`}>
          <BlankButton borderColor={colors.green}>Visualiser</BlankButton>
        </NavLink>
        <NavLink to={`mise-a-jour-maison/${id}`}>
          <BlankButton borderColor={colors.green}>Modifier</BlankButton>
        </NavLink>
        <BlankButton borderColor={colors.green} onClick={deleteHouse}>
          Supprimer
        </BlankButton>
        <ToastContainer />
      </Buttons>
    </Card>
  );
}

const BlankButton = styled.button`
    border: solid 4px;
    border-radius: 6px;
    background-color: transparent;
    padding:.3rem 2rem;
    color:${colors.blue};
    width: auto;
    height: 40px;
    margin: 2px;
    :hover {
      transform: scale(1.1);
      transition: all 0.1s ease-in-out;
    }
    
    
`

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${colors.blue};
  width: 100%;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Card = styled.div`
  display: flex;
  width: auto;
  height: 18rem;
  flex-direction: column;
  justify-content: space-around;
  margin: 0.5rem 1.5rem;

  img {
    height: 11rem;
    width: 100%;
    border-radius: 10px;
    box-shadow: 5px 5px 10px;
    object-fit: cover;

    :hover {
      transform: scale(1.03);
      transition: all 0.4s ease-in-out;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default AdminHouseCard;
