import {
  // ADD_BOOKING_OPTION,
  // REMOVE_BOOKING_OPTION,
  RESET_BOOKING,
  SET_BOOKING_USER,
  SET_BOOKING_HOUSE,
  SET_BOOKING_ARRIVAL,
  SET_BOOKING_DEPARTURE,
  SET_BOOKING_TRAVELLERS_NUMBERS,
  UPDATE_BOOKING_OPTION,
} from './actions';

const initialBookingState = {
  user: null,
  home_to_rent: null,
  arrival_date: null,
  departure_date: null,
  number_of_renter: 1,
  options: [],
  totalPrice: 0,
};

const bookingReducer = (state, action) => {
  const getUpdatedOption = (options, option, quantity) => {
    const optionToUpdate = options.find((o) => o.id === option.id);
    if (optionToUpdate) {
      optionToUpdate.quantity = quantity;
      return optionToUpdate;
    }
    const createdOptionIfNotExists = {
      ...option,
      quantity,
    };
    return createdOptionIfNotExists;
  };

  const updatedOptions = (options, payload) => {
    const optionsCopy = [...options];
    const {
      option,
      quantity,
    } = payload;
    const indexToUpdate = optionsCopy.findIndex((o) => o.id === option.id);
    const updatedOption = getUpdatedOption(optionsCopy, option, quantity);

    if (indexToUpdate !== -1) {
      optionsCopy[indexToUpdate] = updatedOption;
    } else {
      optionsCopy.push(updatedOption);
    }
    return optionsCopy;
  };

  switch (action.type) {
    case SET_BOOKING_USER:
      return { ...state, user: action.payload };
    case SET_BOOKING_HOUSE:
      return { ...state, home_to_rent: action.payload };
    case SET_BOOKING_ARRIVAL:
      return { ...state, arrival_date: action.payload };
    case SET_BOOKING_DEPARTURE:
      return { ...state, departure_date: action.payload };
    case SET_BOOKING_TRAVELLERS_NUMBERS:
      return { ...state, number_of_renter: action.payload };
    case UPDATE_BOOKING_OPTION:
      return {
        ...state,
        options: updatedOptions(state.options, action.payload),
      };
    case RESET_BOOKING:
      return initialBookingState;
    default:
      return state;
  }
};

export { bookingReducer, initialBookingState };
