import styled from 'styled-components';
import colors from './colors';

const Submitbutton = styled.button`
    height: ${(props) => props.height || '32px'};
    border-radius: ${(props) => props.borderRadius || '8px'};
    background-color: ${(props) => props.backgroundColor || colors.brown};
    color: ${(props) => props.textColor || 'white'};
    width: ${(props) => props.width || '20%'};
    font-size: ${(props) => props.fontSize || '1.3em'};
    margin-bottom: ${(props) => props.marginBotton || '10px'};
    margin: ${(props) => props.margin || "auto"};
    cursor: pointer;

    @media (min-width: 768px) {
        width: 100px;
        height: 40px;
    }

    @media (max-width: 768px) {
        width: 100px;
    }
`;

export default Submitbutton;