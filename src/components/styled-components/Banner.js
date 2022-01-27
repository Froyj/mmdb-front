import styled from "styled-components";
import colors from "./colors";

const Banner = styled.h1`
    display: flex;
    background-image: ${(props) => props.image};
    background-size: ${(props) => props.size || '100%'};
    background-position: ${(props => props.backgroundPosition)}; 
    background-color: ${colors.green};
    color: ${colors.lightGreen};
    font-size: 1.5rem;
    font-family: 'Trebuchet MS';
    font-weight: 100;
    width: 100%;
    height: 8rem;
    margin-top: ${(props) => props.marginTop || "1rem"};
    margin-bottom: ${(props) => props.marginBottom || "0.5em"};
    align-items: center;
    justify-content: center;
`;

export default Banner;