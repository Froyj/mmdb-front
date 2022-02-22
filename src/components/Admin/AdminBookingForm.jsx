/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from '../../helper/axios-config';

import UserSelector from './UserSelector';
import HouseSelector from './HouseSelector';
import DatePicker from './DatePicker';
import Counter from './Counter';
import OptionsPanel from './OptionsPanel';
import BookingContext from '../../contexts/Booking/booking';
import {
  SET_BOOKING_ARRIVAL,
  SET_BOOKING_DEPARTURE,
  SET_BOOKING_TRAVELLERS_NUMBERS,
} from '../../reducers/booking/actions';
import useBookingPrice from '../customHooks/useBookingPrice';
import FilledButton from '../styled-components/FilledButton';

function AdminBookingForm({ houses, addBooking }) {
  AdminBookingForm.propTypes = {
    houses: PropTypes.arrayOf(PropTypes.any),
  };
  AdminBookingForm.defaultProps = {
    houses: [],
  };

  const { booking, dispatchBooking } = useContext(BookingContext);
  const [mealOptions, setMealOptions] = useState([]);

  const bookingPrice = useBookingPrice(booking);

  useEffect(() => {
    axios.get('/options').then((response) => {
      setMealOptions(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      user: { id: userId },
      house: { id: houseId },
      arrival,
      departure,
      travellersNumber,
      options,
    } = booking;

    const bookingDTO = {
      bookingInfos: {
        user_id: userId,
        home_to_rent_id: houseId,
        arrival_date: arrival,
        departure_date: departure,
        number_of_renter: travellersNumber,
      },
      options,
    };

    addBooking(bookingDTO.bookingInfos);
  };

  return (
    <div>
      <ToastContainer />
      <Form onSubmit={handleSubmit}>
        <h1>Réservez votre maison</h1>
        <QuickBooking>
          <Container display='flex' flexDirection='row'>
            <div>
              <BookingSection>
                <UserSelector />
                {booking.user && <HouseSelector houses={houses} />}
                {booking.house && (
                  <SelectBookingDates>
                    <DatePicker
                      name='arrival'
                      label='Arrivée'
                      handleChange={(e) =>
                        dispatchBooking({
                          type: SET_BOOKING_ARRIVAL,
                          payload: e.target.value,
                        })
                      }
                    />
                    <DatePicker
                      name='departure'
                      label='Départ'
                      handleChange={(e) =>
                        dispatchBooking({
                          type: SET_BOOKING_DEPARTURE,
                          payload: e.target.value,
                        })
                      }
                    />
                  </SelectBookingDates>
                )}
                {booking.arrival && booking.departure && (
                  <SelectTravellersNumber>
                    <Counter
                      label='Nombre de personnes'
                      name='travellersNumber'
                      defaultValue={1}
                      min={1}
                      max={booking.house?.capacity}
                      handleChange={(e) =>
                        dispatchBooking({
                          type: SET_BOOKING_TRAVELLERS_NUMBERS,
                          payload: +e.target.value,
                        })
                      }
                    />
                  </SelectTravellersNumber>
                )}
              </BookingSection>
            </div>
            <BookingSection>
              <OptionsPanel
                mealOptions={mealOptions}
                dispatchBooking={dispatchBooking}
              />
            </BookingSection>
          </Container>
        </QuickBooking>
        <PriceDetails>
          <SumUpTitle>Résumé de votre réservation</SumUpTitle>
          <SumUp>
            <p>Frais de ménage : 60 euros</p>
            <br />
            <p>Taxe de séjour nombre de personnes : 2 euros/personne</p>
            <br />
            <p>Total: {bookingPrice}</p>
            <br />
          </SumUp>
        </PriceDetails>
        <FilledButton
          as='input'
          fitContent
          alignSelf='flex-end'
          type='submit'
          value='Réserver'
        />
      </Form>
    </div>
  );
}

const Container = styled.div`
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Form = styled.form`
  border: 2px solid #1c2c46;
  background-color: white;
  border-radius: 15px;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  width: auto;
  color: #1c2c46;
  padding: 1em;
  margin: 2em 0;

  h1 {
    text-align: center;
    padding: 20px 20px;
  }
`;

const QuickBooking = styled.div`
  border: 2px solid #ba9b5c;
  /* width: 100%; */
  border-radius: 5px;
  /* display: flex;
  flex-direction: column; */
  margin: 0;
  margin-top: 10px;
  padding: 1em;
  & label {
    margin-top: 1em;
    padding-right: 1em;
  }
`;

const BookingSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em;
  & label {
    display: flex;
    flex-direction: column;
    margin: 1em;
  }
  & label:nth-child(1) {
    margin-top: 0;
  }
  & select {
    max-width: 300px;
  }
`;

const SelectBookingDates = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const SelectTravellersNumber = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 5px;
  & input[type='number'] {
    width: 50px;
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const SumUpTitle = styled.h3`
  text-align: center;
`;

const SumUp = styled.div`
  margin-top: 10px;
`;

const PriceDetails = styled.div`
  padding: 1em;
  border: 2px solid #ba9b5c;
  border-radius: 5px;
  margin: 1em 0;
`;

export default AdminBookingForm;
