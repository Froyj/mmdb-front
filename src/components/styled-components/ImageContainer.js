import styled from "styled-components";

const ImageContainer = styled.div`
  text-align: ${(props) => props.textAlign || "center"};
  display: ${(props) => props.display || "flex"};
  justify-content: ${(props) => props.justifyContent || "space-evenly"};
  align-items: ${(props) => props.alignItems|| "center"};
  margin-bottom: ${(props) => props.marginBottom|| "24px"};
  
  @media (max-width: 768px) {
  display: block;
}
`;

export default ImageContainer;
