import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Global from '../components/styled-components/Global';

function House({ houses }) {
    House.propTypes = {
        houses: PropTypes.string.isRequired,
    }

    const { id } = useParams();

    return (
        <Global>
            <h1> {houses[id-1].name} </h1>
            <p> {houses[id-1].adress} {houses[id-1].country} </p>
            <ImagesDiv>
            <img src={houses[id-1].image.principal} alt={houses[id-1].name} />
            </ImagesDiv>
        </Global>
    );
}

const ImagesDiv = styled.div`
    display: flex;
`
export default House;