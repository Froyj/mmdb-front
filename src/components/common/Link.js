import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledLink = styled(Link)`
    text-decoration: none;
    align-self: ${props => props.alignSelf || 'auto'};
`;

export default StyledLink;