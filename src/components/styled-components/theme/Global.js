import styled from "styled-components";
import colors from "./colors";

const Global = styled.div`
    display: ${(props) => props.display || "flex"};
    flex-direction: ${(props) => props.flexDirection || "column"};
    width: ${(props) => props.width || "90%" };
    margin: ${(props) => props.margin || "3rem auto"};
    font-family: ${(props) => props.fontFamily || "Trebuchet MS"};
    text-align: ${(props) => props.textAlign || "auto"};
    color: ${colors.blue};
    min-height: ${(props) => props.minHeight};

  a {
    text-decoration: ${(props) => props.textDecoration || "none"};
  }
`;

export default Global;
