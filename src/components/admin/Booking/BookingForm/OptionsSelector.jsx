import { useContext } from 'react';
import BookingContext from '../../../../contexts/Booking/booking';
import { UPDATE_BOOKING_OPTION } from '../../../../reducers/booking/actions';
import Counter from '../../../common/forms/Counter';

const OptionsSelector = ({ mealOptions }) => {
  const { booking, dispatchBooking } = useContext(BookingContext);
  return mealOptions.map((option) => (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label htmlFor={option.name} key={option.id}>
      <Counter
        label={`${option.name} - ${option.price} €`}
        name={option.name}
        defaultValue={0}
        handleChange={(e) => {
          dispatchBooking({
            type: UPDATE_BOOKING_OPTION,
            payload: {
              option,
              quantity: +e.target.value,
            },
          });
        }}
        value={booking.options.find(o => o.id === option.id)?.quantity || 0}
      />
    </label>
  ));
};

export default OptionsSelector;
