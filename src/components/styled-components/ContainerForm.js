import styled from "styled-components";

const ContainerForm = styled.div`
  display: ${(props) =>  props.display || "flex"};
  flex-direction: ${(props) =>  props.flexDirection || "column"};
  align-items: ${(props) =>  props.alignItems || "center"};
  /* background-color:${(props) =>  props.backgroundColor || "#f3f9f2"}; */
  width: ${(props) =>  props.width || "60%"};
  height: ${(props) => props.height || "auto"};
  border-radius: ${(props) =>  props.borderRadius || "15px"};
  margin: ${(props) =>  props.margin || "auto"};
  margin-top: ${(props) =>  props.marginTop || "16px"};
  margin-bottom: ${(props) =>  props.marginBottom || "16px"};
  border : ${(props) =>  props.border || "2px solid #1c2c46"};

  @media (max-width: 768px) {
    width: 90%;
    }
`;

export default ContainerForm;