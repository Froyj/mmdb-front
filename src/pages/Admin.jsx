import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Section from '../components/styled-components/Section';
import FilledButton from '../components/styled-components/FilledButton';
import Global from '../components/styled-components/Global';

import AdminHouseList from '../components/AdminHouseList';
import AdminReservationList from '../components/AdminReservationList';

function Admin({ houses, bookings }) {
        Admin.propTypes = {
        houses: PropTypes.arrayOf(PropTypes.object).isRequired,
        bookings: PropTypes.arrayOf(PropTypes.object).isRequired,
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
                <Link to='maison/ajouter' ><FilledButton> Ajouter une nouvelle maison </FilledButton></Link>
                <FilledButton> Supprimer une maison </FilledButton>
            </ButtonsDiv>
            <Section>
                <h1>Mes réservations</h1>
            </Section>
            <AdminReservationList bookings={bookings} />
        </Global>
    );
}

const ButtonsDiv = styled.div`
    display: flex;
    margin: 1rem;
`

export default Admin;
