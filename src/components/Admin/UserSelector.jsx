import { useContext, useEffect, useState } from 'react';
import BookingContext from '../../contexts/Booking/booking';
import axios from '../../helper/axios-config';
import { SET_BOOKING_USER } from '../../reducers/booking/actions';
import { FieldErrorMessage } from '../styled-components/forms';

const UserSelector = ({ error = '' }) => {
  const { dispatchBooking } = useContext(BookingContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('/users')
      .then((res) => res.data)
      .then((fetchedUsers) => {
        setUsers(fetchedUsers);
      })
      .catch(console.log);
  }, []);

  const handleSelect = (e) => {
    const user = users.find((u) => u.id === Number(e.target.value));
    dispatchBooking({ type: SET_BOOKING_USER, payload: user });
  };

  return (
    <label htmlFor='user-select'>
      Choisissez l'utilisateur concerné
      <select id='user-select' onChange={handleSelect}>
        <option value={null}>Selectionnez un utilisateur</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.firstname} {user.lastname}
          </option>
        ))}
      </select>
      {error && <FieldErrorMessage>{error}</FieldErrorMessage>}
    </label>
  );
};

export default UserSelector;
