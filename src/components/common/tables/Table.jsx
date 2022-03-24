import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Row = styled.tr`
  padding: 23px;
  display: table-row;
  justify-content: space-evenly;
`;
const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border: none;
  min-width: ${props => props.minWidth || 'auto'}
`;


const TableHeader = styled.thead`
  font-weight: bold;
`;

const TableBody = styled.tbody`
${Row}:nth-child(2n +1) {
  background-color: aliceblue;
}
`

const Cell = styled.td`
  margin: 1em;
  padding: 0.5em;
  text-align: center;
`;

const ClientInfos = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)``;

export { Table, TableHeader, TableBody, Row, Cell, ClientInfos, StyledLink };
