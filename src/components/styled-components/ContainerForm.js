import styled from "styled-components";

const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f3f9f2;
  width: 60%;
  border-radius: 15px;
  margin: auto;
  margin-top: 16px;
  margin-bottom: 16px;
  border : 2px solid #1c2c46;

  @media (max-width: 768px) {
    width: 90%;
    }
`;

export default ContainerForm;