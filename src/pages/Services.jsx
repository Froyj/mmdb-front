import styled from 'styled-components';
import TitleForm from '../components/styled-components/TitleForm';
import Global from "../components/styled-components/Global";

function Services() {

    return (
    <Global>
        <MainContainer>
            <TitleForm> Nos Services </TitleForm>
        </MainContainer>
     </Global>
    );
}

const MainContainer = styled.div`
`
export default Services;