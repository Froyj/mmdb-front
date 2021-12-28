import styled from 'styled-components';
import colors from './colors';

const FilledButton = styled.button`
    border: none;
    border-radius: ${(props) => props.borderRadius || '6px'};
    background-color: ${(props) => props.backgroundColor || colors.blue};
    padding: ${(props) => props.padding || '.6rem 2.5rem'};
    margin: ${(props) => props.margin || '.5rem'};
    color: ${(props) => props.textColor || 'white'};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`

export default FilledButton;