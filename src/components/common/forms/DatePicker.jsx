import { FieldErrorMessage } from ".";

const DatePicker = ({ name, label, handleChange, min, error }) => (
  <label htmlFor={name}>
    {label}
    <br />
    <input type='date' onChange={handleChange} required min={min}/>
    {error && <FieldErrorMessage>{error}</FieldErrorMessage>}
  </label>
);

export default DatePicker;
