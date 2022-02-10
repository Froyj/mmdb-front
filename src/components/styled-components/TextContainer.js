import styled from "styled-components";

const TextContainer = styled.div`
width: ${(props) => props.width || '70%'};
margin: ${(props) => props.margin || 'auto'};
padding-top: ${(props) => props.paddingTop || '0px'};
padding-bottom: ${(props) => props.paddingBottom ||"0px"};
font-size: ${(props) => props.fontSize || '16px'};
line-height: ${(props) => props.lineHeight || "2em"};
border-bottom: ${(props) => props.borderBottom || "1px solid black"};

span{
    justify-content:center;
}


@media (max-width: 768px) {
 width: 95%;
 line-height: 1.3em;
}
`;

export default TextContainer;