import styled from "styled-components";
import colors from "./colors";

const Banner = styled.h1`
    display: flex;
    background-image: ${(props) => props.image};
    background-size: cover;
    color: ${colors.lightGreen};
    font-size: 5rem;
    font-family: 'Trebuchet MS';
    font-weight: 100;
    width: 100%;
    height: 20rem;
    margin-top: 1rem;
    align-items: center;
    justify-content: center;
`

export default Banner;