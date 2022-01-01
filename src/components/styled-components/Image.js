import styled from "styled-components";

const Image = styled.img`
  border-radius: ${(props) => props.borderRadius || "50%"};
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "100px"};

  @media (max-width: 768px) {
    width: 90%;
    height:300px;
    border-radius: 5px;
  }
`;

export default Image;