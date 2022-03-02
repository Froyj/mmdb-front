import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border: none;
`;

const Row = styled.tr`
  padding: 23px;
  display: table-row;
  justify-content: space-evenly;
  &:nth-child(2n) {
    background-color: aliceblue;
  }
`;

const TableHeader = styled.thead`
  
`;

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

export { Table, TableHeader, Row, Cell, ClientInfos, StyledLink };
