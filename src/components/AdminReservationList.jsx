import styled from "styled-components";
import PropTypes from "prop-types";
import AdminReservationCard from "./AdminReservationCard";

function AdminReservationList({ bookings }) {
    AdminReservationList.propTypes = {
        bookings: PropTypes.arrayOf(PropTypes.object).isRequired,
    };

    return (
        <ReservationTable>
            {bookings.map(booking => <AdminReservationCard
                key={booking.id} 
                user={booking.user_id}
                arrival={booking.arrival_date}
                departure={booking.departure_date}
                house={booking.home_to_rent_id} 
            />)}
        </ReservationTable>
    )
};

const ReservationTable = styled.table`
    display: flex;
    flex-direction: column;
    width: 90%;
    align-self: center;
`

export default AdminReservationList;