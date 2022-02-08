import styled from "styled-components";
import Global from "../styled-components/Global";
import FilledButton from "../styled-components/FilledButton";

//  --> vv house vv <--

const Container = styled(Global)`
  p {
    margin-left: 10px;
  }

  margin: auto;
  margin-top: 20px;
`;

const ImagesDiv = styled.div`
  /* display: flex;
flex-direction: column; */
  border-radius: 25px;
  overflow: hidden;
  /* border: 5px solid black; */

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .grid2,
  .grid3,
  .grid4,
  .grid5 {
    display: none;
  }

  @media screen and (min-width: 600px) {
    display: grid;
    margin: 1.5em 0px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    height: auto;
    width: 100%;

    .grid2 {
      display: block;
      grid-area: 1 / 3 / 2 / 4;
    }

    .grid3 {
      display: block;
      grid-area: 1 / 4 / 2 / 5;
    }

    .grid4 {
      display: block;
      grid-area: 2 / 3 / 3 / 4;
    }

    .grid5 {
      display: block;
      grid-area: 2 / 4 / 3 / 5;
    }
  }
`;

const PrincipalImg = styled.div`
  width: 100%;
  height: auto;
  grid-area: 1 / 1 / 3 / 3;
`;

const Information = styled.div`
  /* border: 4px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

const Description = styled.div`
  /* border: 4px solid grey; */
  width: 100%;

  h2 {
    margin: 0.5em;
  }

  h3 {
    margin: 0.7em 0;
  }

  li {
    list-style: none;
    /* margin-bottom: 10px; */
    margin-left: 0.5em;
  }

  @media screen and (min-width: 800px) {
    width: 50%;
  }
`;

const EquipmentContainer = styled.div`
  .dropDown-title {
    cursor: pointer;
  }

  .visible {
    display: block;
    justify-content: space-around;
    /* display: flex; */
  }
`;

const EquipmentList = styled.div`
  display: none;
  background-color: rgba(179, 154, 154, 0.123);
  padding: 1em;
  /* border: 2px black solid; */
  /* width: 70px; */
  /* text-align: center; */
  /* border: 4px solid green; */

  .equipmentLi {
    display: flex;
    flex-direction: row;
  }
`;

const Showlist = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */

  @media screen and (min-width: 600px) {
    flex-flow: row wrap;
    justify-content: space-evenly;
    width: 100%;
    /* background-color: gray; */
  }
`;

const InfoButton = styled(FilledButton)`
  /* width: 33%; */
  /* margin: 0; */
  padding: 0.6em;

  @media screen and (min-width: 600px) {
  }
`;

const Booking = styled.div`
  border: 4px solid grey;
  width: 100%;
  text-align: center;

  @media screen and (min-width: 600px) {
    border: solid 10px red;
    width: 30%;
  }
`;

//  --> ^^ house ^^ <--

export {
  Container,
  Booking,
  ImagesDiv,
  EquipmentContainer,
  EquipmentList,
  Showlist,
  InfoButton,
  PrincipalImg,
  Information,
  Description,
};
