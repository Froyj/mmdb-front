import styled from "styled-components";

const ImageContainer = styled.div`
  text-align: ${(props) => props.textAlign || "center"};
  display: ${(props) => props.display || "flex"};
  justify-content: ${(props) => props.justifyContent || "space-evenly"};
`;

export default ImageContainer;
