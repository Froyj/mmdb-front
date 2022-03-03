import styled from "styled-components";

const SubSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-basis: ${(props) => props.flexBasis || 'auto'};
  flex-grow: ${(props) => props.flexGrow || 1};
  margin: 1em;
  padding: 1em;
  border: 1px solid #ba9b5c;
  border-radius: 10px;
  & ul {
    margin-top: 0.5em;
    list-style: none;
  }
  & li {
    margin-top: 0.5em;
  }
  
  & table {
    margin-top: 1em;
  }

  .full-width {
    width: 100%
  }

  & td,
  th {
    padding: 0.5em;
  }

  & tr {
    &:nth-child(2n + 1) {
      background-color: #e2f8d6;
    }
    vertical-align: top;
  }

  & th {
    text-align: left;
  }
  & h3 {
    font-size: 1.5em;
    margin-right: 1em;
    margin-bottom: 1em;
  }
`;

export default SubSection;