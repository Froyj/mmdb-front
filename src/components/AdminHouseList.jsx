import PropTypes from 'prop-types';
import styled from 'styled-components';

import AdminHouseCard from './adminHouseCard';

function AdminHouseList({ houses }) {
    AdminHouseList.propTypes = {
        houses: PropTypes.string.isRequired,
    }

    return (
        <HouseList>
        {houses.map(house => <AdminHouseCard key={house.id} name={house.name}/> )}
        </HouseList>
    )
}

const HouseList = styled.div`
    display: flex;
`
export default AdminHouseList