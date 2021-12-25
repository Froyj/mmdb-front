// import {useState} from 'react'
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import Section from "../components/styled-components/Section";
import AdminHouseList from "../components/AdminHouseList";
import FilledButton from "../components/styled-components/FilledButton";
import AdminReservationList from "../components/AdminReservationList";

function Admin() {
//   const [state, setState] = useState([]);
//   const handleClick = async () => {
//     await fetch('/houses')
//     .then((response) => response.json())
//     .then((data) => setState(data));
    
//   };
  return (
    <>
      <Section>
        <h1>Statistiques</h1>
      </Section>
      <Section>
        <h1>Mes maisons des bois</h1>
      </Section>
      <AdminHouseList />
      <ButtonsDiv>
        <NavLink to="/NouvelleMaison">
          <FilledButton> Ajouter une nouvelle maison </FilledButton>
        </NavLink>
        <FilledButton> Supprimer une maison </FilledButton>
      </ButtonsDiv>
      {/* <button type="button" onClick={handleClick}>salut</button>
      <div>{state.map((e) => <li>{e.name}</li>)}</div> */}
      <Section>
        <h1>Mes réservations</h1>
      </Section>
      <AdminReservationList />
    </>
  );
}

const ButtonsDiv = styled.div`
  display: flex;
  margin: 1rem;
`;

export default Admin;
