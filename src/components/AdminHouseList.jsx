import styled from 'styled-components';

import house from '../data/fictiveData';
import AdminHouseCard from './adminHouseCard';

function AdminHouseList() {

    return (
        <HouseList>
        {house.map(el => <AdminHouseCard id={el.id} name={el.name} image={ el.images.principal } /> )}
        </HouseList>
    )
}

const HouseList = styled.div`
    display: flex;
`
export default AdminHouseList