import styled from "styled-components";

const ContainerForm = styled.div`
  display: ${(props) =>  props.display || "flex"};
  justify-content: ${(props) => props.justifyContent || "center"};
  flex-direction: ${(props) =>  props.flexDirection || "column"};
  align-items: ${(props) =>  props.alignItems || "center"};
  width: ${(props) =>  props.width || "60%"};
  /* height: ${(props) => props.height || "auto"}; */
  border-radius: ${(props) =>  props.borderRadius || "15px"};
  /* margin: ${(props) =>  props.margin || "auto"}; */
  border : ${(props) =>  props.border || "2px solid #1c2c46"};
  margin-top: ${(props) =>  props.marginTop};  
  margin-Bottom: ${(props) =>  props.marginBottom};  
  
  @media (max-width: 768px) {
    width: 90%;
    }
`;

export default ContainerForm;