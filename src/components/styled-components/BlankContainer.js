import styled from 'styled-components';
import colors from './colors';

const BlankContainer = styled.div`
    border: solid ${(props) => props.borderSize || '4px'} ${(props) => props.borderColor || colors.blue};
    border-radius: ${(props) => props.borderRadius || '6px'};
    background-color: white;
    padding: ${(props) => props.padding || '.3rem 2rem'};
    color: ${(props) => props.textColor || colors.blue};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`

export default BlankContainer;