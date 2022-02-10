import { useReducer } from 'react';
import {
  initialBookingState,
  bookingReducer,
} from '../../reducers/booking/booking';
import BookingContext from './booking';

const BookingContextProvider = ({ children }) => {
  const [booking, dispatchBooking] = useReducer(
    bookingReducer,
    initialBookingState
  );
  return (
    <BookingContext.Provider value={{ booking, dispatchBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingContextProvider;
