import styled from 'styled-components';

const Counter = ({ label, name, defaultValue, min = 0, max, handleChange }) => (
  <StyledCounter>
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
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
