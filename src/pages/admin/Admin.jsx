import { Link } from "react-router-dom";
import styled from "styled-components";

import FilledButton from '../../components/common/buttons/FilledButton';
import colors from '../../components/styled-components/theme/colors';

import AdminHouseList from '../../components/admin/Home/AdminHouseList';
import BookingDashboard from '../../components/admin/Booking/BookingDashboard';
import AdminLegalNoticeUploadForm from "../../components/AdminLegalNoticeUploadForm";

function Admin() {


  return (
    <>
        <Title>
          <h1>Mes maisons des bois</h1>
        </Title>
        <AdminHouseList />
        <ButtonsDiv>
          <Link to='maison/ajouter'>
            <FilledButton> Ajouter une nouvelle maison </FilledButton>
          </Link>
        </ButtonsDiv>
        <BookingDashboard />
        <AdminLegalNoticeUploadForm />
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
