import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { getBookingWithDetails } from '../../api/bookings';
import useBookingPrice from '../../components/customHooks/useBookingPrice';
import Navigation from '../../components/Navigation';

const BookingDetails = () => {
  const { bookingId } = useParams();
  const [bookingWithDetails, setBookingDetails] = useState({});

  const totalPrice = useBookingPrice(bookingWithDetails);

  useEffect(() => {
    const fetchBooking = async (id) => {
      setBookingDetails(await getBookingWithDetails(id));
    };
    fetchBooking(bookingId);
  }, []);

  const {
    user,
    booking_has_option: options,
    home_to_rent: home,
    arrival_date: arrival,
    departure_date: departure,
    number_of_renter: personCount,
  } = bookingWithDetails;
  console.log(options);
  return (
    <>
      <Navigation />
      {user && (
        <MainSection>
          <h2>Résumé de la reservation</h2>
          <Container>
            <SubSection flexGrow='2'>
              <h3>Locataire</h3>
              <ul>
                <li>
                  Email: {user?.firstname} {user?.lastname.toUpperCase()}
                </li>
                <li>Téléphone: {user?.phone}</li>
                <li>
                  <Container display='flex'>
                    <div>Adresse: </div>
                    <div>
                      <Container display='flex' flexDirection='column'>
                        <span>{user.adress}</span>
                        <span>
                          {user.zipcode} {user.city}
                        </span>
                      </Container>
                    </div>
                  </Container>
                </li>
              </ul>
            </SubSection>
            <SubSection flexBasis='50%' flexGrow='2'>
              <h3>Location</h3>
              <h4>{home?.name}</h4>
              <ul>
                <li>
                  Adresse: {home.adress} {home.zipcode} {home.city}
                </li>
                <li>Heure d'arrivée minimum: {home.arrival_hour}</li>
                <li>Heure de départ maximum: {home.adress}</li>
                <li>
                  Capacité: {home.capacity}{' '}
                  {home.capacity > 1 ? 'personnes' : 'personne'}
                </li>
                <li>Prix par nuit: {home.price_by_night} €</li>
              </ul>
            </SubSection>
            <SubSection flexBasis='100%'>
              <h3>Informations générales</h3>
              <ul>
                <li>Nombre de personnes: {personCount}</li>
                <li>Date d'arrivée: {arrival}</li>
                <li>Date de départ: {departure}</li>
              </ul>
              <h3>Options</h3>
              {options.length === 0 ? (
                <p>Aucune option</p>
              ) : (
                <ul>
                  {options.map(({ quantity, option }) => (
                    <li key={option.id}>
                      {option.name} X {quantity} = {quantity * option.price} €
                    </li>
                  ))}
                </ul>
              )}
              <h3>Total à payer :</h3>
              <p>{totalPrice}</p>
            </SubSection>
          </Container>
        </MainSection>
      )}
    </>
  );
};

const MainSection = styled.main`
  margin: 2em;
  padding: 2em;
  h2 {
  }
`;

const Container = styled.div`
  display: ${(props) => props.display || 'flex'};
  flex-direction: ${(props) => props.flexDirection || 'row'};
  justify-content: stretch;
  flex-wrap: wrap;
`;

const SubSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-basis: ${(props) => props.flexBasis || 'auto'};
  flex-grow: ${(props) => props.flexGrow || 1};
  margin: 1em;
  padding: 1em;
  border: 2px blue solid;
  border-radius: 10px;
  & ul {
    margin-top: 0.5em;
    list-style: none;
  }
  & li {
    margin-top: 0.5em;
  }
`;

export default BookingDetails;
