import styled from 'styled-components';
import colors from '../../styled-components/theme/colors';

const Submitbutton = styled.button`
    height: ${(props) => props.height || '32px'};
    border-radius: ${(props) => props.borderRadius || '8px'};
    background-color: ${(props) => props.backgroundColor || colors.brown};
    color: ${(props) => props.textColor || 'white'};
    width: ${(props) => props.width || '50%'};
    font-size: ${(props) => props.fontSize || '16px'};
    margin-bottom: ${(props) => props.marginBotton || '10px'};
    margin: ${(props) => props.margin || "auto"};
    margin-top: ${(props) => props.marginTop || '1em'};
    border: ${(props) => props.border};
    background-color: ${(props) => props.backgroundColor};

    @media (max-width: 768px) {
        width: 100px;
    }
`;

export default Submitbutton;