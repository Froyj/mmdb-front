import styled from "styled-components";

const Container = styled.div`
  display: ${(props) => props.display || 'flex'};
  flex-direction: ${(props) => props.flexDirection || 'row'};
  justify-content: ${(props) => props.justifyContent || 'stretch'};
  flex-wrap: wrap;
  flex-basis: ${(props) => props.flexBasis || 'auto'};
  flex-grow: ${(props) => props.flexGrow || 0};
  justify-self: ${(props) => props.justifySelf || "auto"};
  margin:  ${(props) => props.margin || 0};
`;

export default Container;