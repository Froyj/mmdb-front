import { useContext } from 'react';
import BookingContext from '../../../../contexts/Booking/booking';
import { SET_BOOKING_HOUSE } from '../../../../reducers/booking/actions';
import { FieldErrorMessage } from '../../../common/forms';

const HouseSelector = ({ houses, error }) => {
  const { booking, dispatchBooking } = useContext(BookingContext);
  const {home_to_rent: homeToRent } = booking;
  const handleSelect = (e) => {
    const house = houses.find((h) => h.id === parseInt(e.target.value, 10));
    dispatchBooking({type: SET_BOOKING_HOUSE, payload: house});
  };

  return (
    <div>
      <label htmlFor='home'>
        Maison à reserver
        <select
          id='home'
          onChange={handleSelect}
          value={homeToRent?.id || ''}
        >
          <option value=''>Selectionner une maison</option>
          {houses.map((house) => (
            <option key={house.id} value={house.id} >
              {house.name}
            </option>
          ))}
        </select>
        {error && <FieldErrorMessage>{error}</FieldErrorMessage>}
      </label>
    </div>
  );
};

export default HouseSelector;
