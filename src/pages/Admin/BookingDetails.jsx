import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getBookingWithDetails } from '../../api/bookings';
import Navigation from '../../components/layout/Navigation';
import {
  CustomerInfos,
  GeneralInfos,
  HouseInfos,
} from '../../components/Admin/Booking/BookingDetails';
import {
  Container,
  MainSection,
} from '../../components/common/containers';
import StyledLink from '../../components/common/Link';

const BookingDetails = () => {
  const { bookingId } = useParams();
  const [bookingWithDetails, setBookingDetails] = useState({});

  useEffect(() => {
    const fetchBooking = async (id) => {
      setBookingDetails(await getBookingWithDetails(id));
    };
    fetchBooking(bookingId);
  }, []);

  const { user, home_to_rent: home } = bookingWithDetails;

  return (
    <>
      <Navigation />
      {user && (
        <MainSection>
          <StyledLink to="/admin/dashboard" alignSelf='end'>
            Retour à la liste des réservations
          </StyledLink>
          <h2>Résumé de la reservation</h2>
          <Container>
            <CustomerInfos customer={user} />
            <HouseInfos house={home} />
            <GeneralInfos booking={bookingWithDetails} />
          </Container>
        </MainSection>
      )}
    </>
  );
};

export default BookingDetails;
