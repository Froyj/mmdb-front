const DatePicker = ({ name, label, handleChange }) => (
  <label htmlFor={name}>
    {label}
    <br />
    <input type='date' onChange={handleChange}/>
  </label>
);

export default DatePicker;
