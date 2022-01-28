import { useEffect, useState } from 'react/cjs/react.development';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

import BlankContainer from './styled-components/BlankContainer';
import FilledButton from './styled-components/FilledButton';
import colors from './styled-components/colors';

function AdminReservationCard({ user, arrival, departure, house }) {
    AdminReservationCard.propTypes = {
        user: PropTypes.number.isRequired,
        arrival: PropTypes.string.isRequired,
        departure: PropTypes.string.isRequired,
        house: PropTypes.number.isRequired,
      }
    
    const [arrivalDate, setArrivalDate] = useState('');
    const [departureDate, setDepartureDate] = useState('');

    const formatDate = (date, setDate) => {
        const newDate = date
            .replace('T00:00:00.000Z', '')
            .split('-')
            .reverse()
            .join('/')
        setDate(newDate)
    };

    useEffect(() => {
        formatDate(arrival, setArrivalDate);
        formatDate(departure, setDepartureDate);
    }, []);

    return (
        <tbody>
            <Line>
                <Column> <BlankContainer borderColor={colors.green} width='20rem'> { user } </ BlankContainer></Column>
                <Column> { arrivalDate } au { departureDate } </Column>
                <Column> { house } </Column>
                <Column> <FilledButton> Détails </FilledButton> </Column>
            </Line>
        </tbody>
    )
};

const Line = styled.tr`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Column = styled.th`
    font-weight: 100;
`

export default AdminReservationCard;