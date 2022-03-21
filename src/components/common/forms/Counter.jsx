import styled from 'styled-components';

const Counter = ({ label, name, value, min=0, defaultValue, max, handleChange }) => (
  <StyledCounter>
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      value={value}
      defaultValue={defaultValue}
      type='number'
      min={min}
      max={max}
      onChange={handleChange}
    />
  </StyledCounter>
);

export default Counter;

const StyledCounter = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0em;
  & label {
    margin-right: 1em;
  }
  & input {
    max-width: 50px;
  }
`;
