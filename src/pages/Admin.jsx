import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../components/styled-components/colors";
import FilledButton from "../components/styled-components/FilledButton";
import Navigation from "../components/Navigation";
import Global from "../components/styled-components/Global";


import AdminHouseList from "../components/AdminHouseList";
// import AdminReservationList from "../components/AdminReservationList";

function Admin({ houses, setHouses }) {
  Admin.propTypes = {
    houses: PropTypes.arrayOf(PropTypes.object).isRequired,
    setHouses: PropTypes.func.isRequired,
    // bookings: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  return (
    <>
      <Navigation />
      <Global 
        minHeight="67.2vh"
      >
        {/* <Section>
        <h1>Statistiques</h1>
      </Section> */}
        <Title>
          <h1>Mes maisons des bois</h1>
        </Title>
        <AdminHouseList houses={houses} setHouses={setHouses} />
        <ButtonsDiv>
          <Link to="maison/ajouter">
            <FilledButton> Ajouter une nouvelle maison </FilledButton>
          </Link>
        </ButtonsDiv>
        {/* <Section>
        <h1>Mes réservations</h1>
      </Section> */}
        {/* <AdminReservationList bookings={bookings} /> */}
      </Global>
    </>
  );
}

const ButtonsDiv = styled.div`
  display: flex;
  margin: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.div`
  display: flex;
  background: ${colors.blue};
  width: 100%;
  margin: 1rem auto;
  align-items: center;
  border-radius: 10px;

  h1 {
    margin: 0.7rem 2rem;
    font-weight: 100;
    font-size: 1.2rem;
    color: white;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export default Admin;
