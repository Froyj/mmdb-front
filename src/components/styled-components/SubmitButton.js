import styled from 'styled-components';
import colors from './colors';

const Submitbutton = styled.button`
    height: ${(props) => props.height || '32px'};
    border-radius: ${(props) => props.borderRadius || '8px'};
    background-color: ${(props) => props.backgroundColor || colors.brown};
    color: ${(props) => props.textColor || 'white'};
    width: ${(props) => props.width || '50%'};
    font-size: ${(props) => props.fontSize || '16px'};
    margin-bottom: ${(props) => props.marginBotton || '10px'};
    margin: ${(props) => props.margin || "auto"};
    margin-top: ${(props) => props.marginTop || '0px'};
    margin-bottom: ${(props) => props.marginBottom || '0px'};
    /* border: ${(props) => props.border || 'solid 2px'}; */

    @media (max-width: 768px) {
        width: 100px;
    }
`;

export default Submitbutton;