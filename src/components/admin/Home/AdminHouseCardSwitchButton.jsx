/* eslint-disable jsx-a11y/label-has-associated-control */
import Switch from 'react-switch';
import axios from '../../../helper/axios-config';

const AdminHouseCardSwitchButton = ({ houseId, isAvailable }) => {  
  const toggleAvailability = () => {
    axios.put(`/home_to_rent/${houseId}`, { availability: !isAvailable });
  };

  return (
    <label htmlFor='availability'>
      <span>Disponible</span>
      <Switch id='availability' checked={isAvailable} onChange={toggleAvailability}/>
    </label>
  );
};

export default AdminHouseCardSwitchButton;
