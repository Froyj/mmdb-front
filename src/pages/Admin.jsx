import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Section from '../components/styled-components/Section';
import AdminHouseList from '../components/AdminHouseList';
import FilledButton from '../components/styled-components/FilledButton';
import AdminReservationList from '../components/AdminReservationList';
import Global from '../components/styled-components/Global';

function Admin() {
    return (
        <Global>
            <Section>
                <h1>Statistiques</h1>
            </Section>
            <Section>
                <h1>Mes maisons des bois</h1>
            </Section>
            <AdminHouseList />
            <ButtonsDiv>
                <NavLink exact to='/NouvelleMaison' ><FilledButton> Ajouter une nouvelle maison </FilledButton></NavLink>
                <FilledButton> Supprimer une maison </FilledButton>
            </ButtonsDiv>
            <Section>
                <h1>Mes réservations</h1>
            </Section>
            <AdminReservationList />
        </Global>
    );
}

const ButtonsDiv = styled.div`
    display: flex;
    margin: 1rem;
`

export default Admin;