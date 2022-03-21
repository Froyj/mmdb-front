import { useContext } from 'react';
import BookingContext from '../../../../contexts/Booking/booking';
import { SET_BOOKING_HOUSE } from '../../../../reducers/booking/actions';
import { FieldErrorMessage } from '../../../common/forms';

const HouseSelector = ({ houses, error, value }) => {
  const { dispatchBooking } = useContext(BookingContext);

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
        >
          <option value=''>Selectionner une maison</option>
          {houses.map((house) => (
            <option key={house.id} value={house.id} selected={value === house.id}>
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
