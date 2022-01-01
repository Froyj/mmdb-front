import styled from "styled-components";

const SecondContainer = styled.div`
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  text-align: ${(props) => props.textAlign || "justify"};
  padding: ${(props) => props.padding || "20px"};

  img {
    border-radius: 50%;
  }

  span{
    font-size: 1.3em;
    display: flex;
    font-weight: bold;
    line-height: 3em;
  }
`;

export default SecondContainer;