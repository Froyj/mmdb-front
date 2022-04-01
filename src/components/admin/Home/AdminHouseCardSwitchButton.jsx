/* eslint-disable jsx-a11y/label-has-associated-control */
import Switch from 'react-switch';
import styled from 'styled-components';

const AdminHouseCardSwitchButton = ({ isAvailable, toggleAvailability }) => (
  <Label htmlFor='availability'>
    <span>Disponible</span>
    <Switch
      id='availability'
      checked={isAvailable}
      onChange={toggleAvailability}
    />
  </Label>
);

const Label = styled.label`
  span {
    margin-right: 1em;
  }
  margin: 1em;
`

export default AdminHouseCardSwitchButton;
