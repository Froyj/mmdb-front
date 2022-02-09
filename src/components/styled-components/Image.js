import styled from "styled-components";

const Image = styled.img`
  border-radius: ${(props) => props.borderRadius || "25%"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "100px"};
  margin : ${(props) => props.margin || "3rem 1rem"};
  box-shadow: ${(props) => props.boxShadow};

  :hover {
        transform: ${(props) => props.transform};
        transition: ${(props) => props.transition};
    }

  @media (max-width: 768px) {
    width: ${(props) => props.mediaWidth || "auto"};
    height: ${(props) => props.mediaHeight || "10rem"};
    margin-right: ${(props) => props.mediaMarginRight};
    margin: ${(props) => props.mediaMargin};
    padding: ${(props) => props.mediaPadding} || "1rem";
    border-radius: 5px;
  }
`;

export default Image;