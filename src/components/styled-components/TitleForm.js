import styled from "styled-components";

const TitleForm = styled.h1`
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.flexDirection || "column"};
  align-items: ${(props) => props.alignItems || "center"};
  color:  ${(props) => props.alignItems || "#1c2c46"};
  padding:  ${(props) => props.padding || "16px"};
  text-decoration: ${(props) => props.textDecoration || "none"}
`;

export default TitleForm;