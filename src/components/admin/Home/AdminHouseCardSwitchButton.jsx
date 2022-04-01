/* eslint-disable jsx-a11y/label-has-associated-control */
import Switch from 'react-switch';

const AdminHouseCardSwitchButton = ({ isAvailable, toggleAvailability }) => (
  <label htmlFor='availability'>
    <span>Disponible</span>
    <Switch
      id='availability'
      checked={isAvailable}
      onChange={toggleAvailability}
    />
  </label>
);

export default AdminHouseCardSwitchButton;
