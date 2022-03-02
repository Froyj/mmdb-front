import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import Global from "../../components/styled-components/theme/Global";

import FilledButton from '../../components/common/buttons/FilledButton';
import colors from '../../components/styled-components/theme/colors';
import Navigation from '../../components/layout/Navigation';

import AdminHouseList from '../../components/Admin/Home/AdminHouseList';
import BookingDashboard from './BookingDashboard';

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
        <Title>
          <h1>Mes maisons des bois</h1>
        </Title>
        <AdminHouseList houses={houses} setHouses={setHouses} />
        <ButtonsDiv>
          <Link to='maison/ajouter'>
            <FilledButton> Ajouter une nouvelle maison </FilledButton>
          </Link>
        </ButtonsDiv>
        <BookingDashboard />
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
