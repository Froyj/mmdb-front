import styled from "styled-components";
import colors from "../styled-components/theme/colors";

const Banner = styled.h1`
    display: flex;
    background-image: ${(props) => props.image};
    background-size: ${(props) => props.size || '100%'};
    background-position: ${(props => props.backgroundPosition)}; 
    background-color: ${colors.green};
    color: ${colors.lightGreen};
    font-size: ${(props) => props.fontSize || '2rem'};
    font-weight: 300;
    font-family: 'Trebuchet MS';
    width: 100%;
    height: ${(props) => props.height || '8rem'};
    margin-top: ${(props) => props.marginTop || "1rem"};
    margin-bottom: ${(props) => props.marginBottom || "0.5em"};
    align-items: center;
    justify-content: center;
    z-index: ${(props) => props.zIndex};
    box-shadow: 1px 1px 5px black;

    @media (max-width: 768px){
        background-size: cover;
        height:8rem;
    }
`

export default Banner;