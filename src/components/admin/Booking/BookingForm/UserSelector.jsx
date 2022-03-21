import { useContext, useEffect, useState } from 'react';
import BookingContext from '../../../../contexts/Booking/booking';
import axios from '../../../../helper/axios-config';
import { SET_BOOKING_USER } from '../../../../reducers/booking/actions';
import { FieldErrorMessage } from '../../../common/forms';

const UserSelector = ({ error = '' }) => {
  const { booking, dispatchBooking } = useContext(BookingContext);
  const {user} = booking
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
    const renter = users.find((u) => u.id === Number(e.target.value));
    dispatchBooking({ type: SET_BOOKING_USER, payload: renter });
  };

  return (
    <label htmlFor='user-select'>
      Choisissez l'utilisateur concerné
      <select id='user-select' onChange={handleSelect} value={user?.id || ''}>
        <option value={null}>Selectionnez un utilisateur</option>
        {users.map((u) => (
          <option key={u.id} value={u.id} >
            {u.firstname} {u.lastname}
          </option>
        ))}
      </select>
      {error && <FieldErrorMessage>{error}</FieldErrorMessage>}
    </label>
  );
};

export default UserSelector;
