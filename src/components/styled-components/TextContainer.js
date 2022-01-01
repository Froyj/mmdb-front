import styled from "styled-components";

const TextContainer = styled.div`
width: ${(props) => props.width || '70%'};
margin: ${(props) => props.margin || 'auto'};
padding-top: ${(props) => props.paddingTop || '0px'};
padding-bottom: ${(props) => props.paddingBottom ||"0px"};
font-size: ${(props) => props.fontSize || '1.3em'};
line-height: ${(props) => props.lineHeight || "2em"}
`;

export default TextContainer;