import styled from 'styled-components';

const BlankTitle = styled.h1`
    font-family: 'Trebuchet MS', sans-serif;
    font-size: 1.1rem;
    font-weight: 100;
    color: ${(props) => props.color || 'white'} ;
    padding: 1em;
`

export default BlankTitle;