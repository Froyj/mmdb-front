import styled from 'styled-components';
import colors from './colors';

const FilledButton = styled.button`
    border: ${(props) => props.border || "none"} ;
    border-radius: ${(props) => props.borderRadius || '6px'};
    background-color: ${(props) => props.backgroundColor || colors.blue};
    padding: ${(props) => props.padding || '.6rem 2.5rem'};
    margin: ${(props) => props.margin || '.5rem'};
    margin-top: ${(props) => props.marginTop};
    color: ${(props) => props.textColor || 'white'};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    font-size: ${(props => props.fontSize)};
    align-self: ${(props) => props.alignSelf};
    max-width: ${(props) => props.fitContent && 'fit-content'};
    cursor : ${(props) => props.cursor || 'pointer'};
    box-shadow: ${(props) => props.boxShadow};
    border: ${(props) => props.border};

    :hover {
        transform: ${(props) => props.transform};
        transition: ${(props) => props.transition};
        color: ${(props) => props.hoverColor}
    }
`

export default FilledButton;
