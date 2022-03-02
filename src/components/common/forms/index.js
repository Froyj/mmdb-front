import styled from 'styled-components';

const Container = styled.div`
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Form = styled.form`
  border: 2px solid #1c2c46;
  background-color: white;
  border-radius: 15px;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  width: auto;
  color: #1c2c46;
  padding: 1em;
  margin: 2em 0;

  h1 {
    text-align: center;
    padding: 20px 20px;
  }
`;

const QuickBooking = styled.div`
  border: 2px solid #ba9b5c;
  /* width: 100%; */
  border-radius: 5px;
  /* display: flex;
flex-direction: column; */
  margin: 0;
  margin-top: 10px;
  padding: 1em;
  & label {
    margin-top: 1em;
    padding-right: 1em;
  }
`;

const BookingSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em;
  & label {
    display: flex;
    flex-direction: column;
    margin: 1em;
  }
  & label:nth-child(1) {
    margin-top: 0;
  }
  & select {
    max-width: 300px;
  }
`;

const SelectBookingDates = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const SelectTravellersNumber = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 5px;
  & input[type='number'] {
    width: 50px;
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const SumUpTitle = styled.h3`
  text-align: center;
`;

const SumUp = styled.div`
  margin-top: 10px;
`;

const PriceDetails = styled.div`
  padding: 1em;
  border: 2px solid #ba9b5c;
  border-radius: 5px;
  margin: 1em 0;
`;

const FieldErrorMessage = styled.span`
  color: red;
`

export {
  Container,
  Form,
  QuickBooking,
  BookingSection,
  SelectBookingDates,
  SelectTravellersNumber,
  SumUpTitle,
  SumUp,
  PriceDetails,
  FieldErrorMessage
};
