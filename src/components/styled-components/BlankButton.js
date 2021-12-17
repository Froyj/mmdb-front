import styled from 'styled-components';
import colors from './colors';

const BlankButton = styled.button`
    border: solid ${(props) => props.borderSize || '4px'} ${(props) => props.borderColor || colors.blue};
    border-radius: ${(props) => props.borderRadius || '6px'};
    background-color: white;
    padding: ${(props) => props.padding || '.3rem 2rem'};
    color: ${(props) => props.textColor || colors.blue}
`

export default BlankButton;