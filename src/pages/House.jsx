import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import house from "../data/fictiveData";

function House() {
    const { id } = useParams();

    return (
        <>
            <h1> {house[id-1].name} </h1>
            <p> {house[id-1].address}, {house[id-1].region} </p>
            <ImagesDiv>
            <img src={house[id-1].images.principal} alt="" />
            </ImagesDiv>
        </>
    );
}

const ImagesDiv = styled.div`
    display: flex;
`
export default House;