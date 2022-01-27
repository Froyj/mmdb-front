import { PropTypes } from "prop-types";
import { useState } from "react";
import styled from "styled-components";
import Counter from "./Counter";



const FoodOption = ({ repas }) => {
  FoodOption.propTypes = {
    repas: PropTypes.string.isRequired,
  };

  const [show, setShow] = useState("true");

  return (
    <FoodContainer>
      <MealName onClick={() => setShow(!show)}>
        <ul>{repas.name}</ul>
      </MealName>

      <SelectBox>
        <MealChoice>
          {show
            ? null
            : repas.dish.map((name) => (
                  <li><Counter /> {`${name.name} : ${name.price}`}</li>
              ))}
        </MealChoice>
      </SelectBox>
    </FoodContainer>
  );
};

const FoodContainer = styled.div`
  display: flex;
  flex-direction: column;

  li {
    list-style: none;
    font-size: 16px;
    justify-content: space-between;
  }
`;

const MealName = styled.h3`
  margin-left: 5%;
  cursor: pointer;
  line-height: 30px;
  text-transform: capitalize;
  &:hover {
    color: #ba9b5c;
}
`;

const MealChoice = styled.h3`
`;


const SelectBox = styled.h3`
  margin-left: 5%;
  margin-top: 2, 5%;

  li {
    font-size: 12px;
  }

  input {
    width: 2rem;
  }
`;

// // const DishName = styled.ul`
// // display : flex;
// // flex-direction: column;
// // line-height: 20px;

// input {
//   margin-right: 10px;
// }
// `;

export default FoodOption;
