import styled from "styled-components";
import Global from "../styled-components/Global";
import FilledButton from "../styled-components/FilledButton";

//  --> vv house vv <--

const Container = styled(Global)`
  margin: 3rem auto;

  p {
    margin-left: 10px;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    width: 90%
  }

  margin: auto;
  margin-top: 20px;
`;

const DisplayModal = styled.button`
  cursor: pointer;
  border: none;
  background: none;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

const Description = styled.div`
  width: 74%;

  h2 {
    margin: 0.5em;
  }

  h3 {
    margin: 0.7em 0;
  }

  li {
    list-style: none;
    margin-left: 0.5em;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 2rem
  }
`;

const EquipmentContainer = styled.div`
  width: 45%;

  .dropDown-title {
    cursor: pointer;
  }

  .visible {
    display: block;
    justify-content: space-around;
  }

  @media screen and (max-width: 600px) {
    width: 100%    
  }
`;

const EquipmentList = styled.div`
  display: none;
  padding: .5rem 2rem;

  li {
    margin: .5rem 0;
  }
`

const Showlist = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    flex-flow: row wrap;
    justify-content: space-evenly;
    width: 100%;
  }
`;

const InfoButton = styled(FilledButton)`
  padding-top: 1em;

  @media screen and (max-width: 600px) {
    width: 100%
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
  DisplayModal,
};
