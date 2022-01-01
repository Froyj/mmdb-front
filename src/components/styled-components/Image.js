import styled from "styled-components";

const Image = styled.img`
  border-radius: ${(props) => props.borderRadius || "50%"};
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "100px"};
`;

export default Image;