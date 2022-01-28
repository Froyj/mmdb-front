import styled from "styled-components";

const Image = styled.img`
  border-radius: ${(props) => props.borderRadius || "25%"};
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "100px"};
  padding-left: ${(props) => props.paddingLeft || "0px"};
  margin-top: ${(props) => props.marginTop || "0px"};

  @media (max-width: 768px) {
    width: 90%;
    height:300px;
    border-radius: 5px;
  }
`;

export default Image;