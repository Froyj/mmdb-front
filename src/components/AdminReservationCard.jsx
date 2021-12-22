import { PropTypes } from 'prop-types';
import styled from 'styled-components';

import BlankContainer from './styled-components/BlankContainer';
import FilledButton from './styled-components/FilledButton';
import colors from './styled-components/colors';

function AdminReservationCard({ user, arrival, departure, house }) {
    AdminReservationCard.propTypes = {
        user: PropTypes.string.isRequired,
        arrival: PropTypes.string.isRequired,
        departure: PropTypes.string.isRequired,
        house: PropTypes.string.isRequired,
      }

    return (
        <tbody>
            <Line>
                <th> <BlankContainer borderColor={colors.green} width='20rem'> { user } </ BlankContainer></th>
                <th> { arrival } au { departure } </th>
                <th> { house } </th>
                <th> <FilledButton> Détails </FilledButton> </th>
            </Line>
        </tbody>
    )
};

const Line = styled.tr`
    display: flex;
    justify-content: space-between;
    font-weight: 100;
    align-items: center;
`

export default AdminReservationCard;