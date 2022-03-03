import React, { useState, useEffect, useContext } from 'react';
import { PropTypes } from 'prop-types';
import moment from 'moment';
import 'react-toastify/dist/ReactToastify.css';

import {
  SET_BOOKING_ARRIVAL,
  SET_BOOKING_DEPARTURE,
  SET_BOOKING_TRAVELLERS_NUMBERS,
} from '../../../../reducers/booking/actions';

import axios from '../../../../helper/axios-config';
import useBookingBillingDetails from '../../../customHooks/useBookingBillingDetails';
import { OptionsPanel, HouseSelector, UserSelector } from '.';

import DatePicker from '../../../common/forms/DatePicker';
import Counter from '../../../common/forms/Counter';
import BookingContext from '../../../../contexts/Booking/booking';
import {
  Container,
  Form,
  QuickBooking,
  SelectTravellersNumber,
  SumUpTitle,
  BookingSection,
  SelectBookingDates,
  SumUp,
  PriceDetails,
} from '../../../common/forms';
import FilledButton from '../../../common/buttons/FilledButton';
import useBookingValidation from '../../../customHooks/useBookingFormErrors';

function AdminBookingForm({ houses, addBooking }) {
  const { booking, dispatchBooking } = useContext(BookingContext);
  const [mealOptions, setMealOptions] = useState([]);
  const fieldsErrors = useBookingValidation(booking);
  const { bookingTotal } = useBookingBillingDetails(booking);

  const minArrival = moment(new Date())
    .add(1, 'days')
    .toISOString()
    .replace(/T/, ' ')
    .split(' ')[0];
  const minDeparture = moment(minArrival)
    .add(2, 'days')
    .toISOString()
    .replace(/T/, ' ')
    .split(' ')[0];

  useEffect(() => {
    axios.get('/options').then((response) => {
      setMealOptions(response.data);
    });
  }, []);

  const handleSubmit = () => {
    const {
      user: { id: userId },
      home_to_rent: { id: houseId },
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
        options: options.map((o) => ({
          option_id: o.id,
          quantity: o.quantity,
        })),
      },
      options,
    };
    console.log(fieldsErrors);
    if (Object.keys(fieldsErrors).length === 0) {
      addBooking(bookingDTO.bookingInfos);
    }
  };

  return (
    <div>
      <Form>
        <h1>Réservez votre maison</h1>
        <QuickBooking>
          <Container display='flex' flexDirection='row'>
            <div>
              <BookingSection>
                <UserSelector error={fieldsErrors.user} />
                {booking.user && (
                  <HouseSelector houses={houses} error={fieldsErrors.house} />
                )}
                {booking.home_to_rent && (
                  <SelectBookingDates>
                    <DatePicker
                      name='arrival'
                      label='Arrivée'
                      min={minArrival}
                      handleChange={(e) =>
                        dispatchBooking({
                          type: SET_BOOKING_ARRIVAL,
                          payload: e.target.value,
                        })
                      }
                      error={fieldsErrors.arrival}
                    />
                    {booking.arrival_date && (
                      <DatePicker
                        name='departure'
                        label='Départ'
                        min={minDeparture}
                        handleChange={(e) =>
                          dispatchBooking({
                            type: SET_BOOKING_DEPARTURE,
                            payload: e.target.value,
                          })
                        }
                        error={fieldsErrors.departure}
                      />
                    )}
                  </SelectBookingDates>
                )}
                {booking.arrival_date && booking.departure_date && (
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
            <p>Total: {bookingTotal}</p>
            <br />
          </SumUp>
        </PriceDetails>
        <FilledButton
          fitContent
          alignSelf='flex-end'
          type='button'
          value='Réserver'
          onClick={handleSubmit}
        >
          Réserver
        </FilledButton>
      </Form>
    </div>
  );
}

AdminBookingForm.propTypes = {
  houses: PropTypes.arrayOf(PropTypes.any),
};
AdminBookingForm.defaultProps = {
  houses: [],
};

export default AdminBookingForm;
