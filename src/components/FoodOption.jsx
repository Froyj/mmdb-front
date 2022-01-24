import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";

const FoodOption = ({ repas }) => {
  FoodOption.propTypes = {
    repas: PropTypes.string.isRequired,
  };
  return (
  <FoodContainer>
    <BreakfastTitle>{repas.name}</BreakfastTitle>
    <DishName>{repas.dish.map((name)=><option type ="checkbox">
      {`${name.name} : ${name.price}`} 
      </option>
       )}</DishName>
  </FoodContainer>
  )
};

const FoodContainer = styled.div`
  display: flex;
  flex-direction: column;

`;

const BreakfastTitle = styled.h1`
`;

const DishName = styled.ul`
display : flex;
flex-direction: column;
line-height: 20px;
  
input {
  margin-right: 10px;
}
`;

export default FoodOption;
