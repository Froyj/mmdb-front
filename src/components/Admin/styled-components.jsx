import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Row = styled.tr`
  padding: 23px;
`;

const Cell = styled.td`
  margin: 1em;
`;

const ClientInfos = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)``;

export { Row, Cell, ClientInfos, StyledLink };
