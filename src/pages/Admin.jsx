import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Section from '../components/styled-components/Section';
import FilledButton from '../components/styled-components/FilledButton';
import Global from '../components/styled-components/Global';

import AdminHouseList from '../components/AdminHouseList';
import AdminReservationList from '../components/AdminReservationList';

function Admin({ houses }) {
        Admin.propTypes = {
        houses: PropTypes.string.isRequired,
    }

    return (
        <Global>
            <Section>
                <h1>Statistiques</h1>
            </Section>
            <Section>
                <h1>Mes maisons des bois</h1>
            </Section>
            <AdminHouseList houses={houses} />
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