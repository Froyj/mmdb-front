import { FieldErrorMessage } from ".";

const DatePicker = ({ name, label, value, handleChange, min, error }) => (
  <label htmlFor={name}>
    {label}
    <br />
    <input type='date' onChange={handleChange} required min={min} value={value}  />
    {error && <FieldErrorMessage>{error}</FieldErrorMessage>}
  </label>
);

export default DatePicker;
