import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Row = styled.tr`
  padding: 23px;
`;

const Cell = styled.td`
  margin: 1em;
  border: ${props => props.noBorder ? 'none' : 'solid 2px #1c2c46'};
`;

const ClientInfos = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)``;

export { Row, Cell, ClientInfos, StyledLink };
