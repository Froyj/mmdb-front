import styled from "styled-components";

const ImageContainer = styled.div`
  display: ${(props) => props.display || "flex"};
  align-items: ${(props) => props.alignItems|| "center"};
  justify-content: ${(props) => props.justifyContent || "center"};
  
  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    overflow: scroll;
    overflow-wrap: normal;
  }
`

export default ImageContainer;
