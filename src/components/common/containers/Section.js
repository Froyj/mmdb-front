import styled from 'styled-components';
import colors from '../../styled-components/theme/colors';

const Section = styled.div`
    display: flex;
    background: ${ (props) => props.background || colors.blue };
    width: 100%;
    margin: 1rem auto;
    align-items: center;
    border-radius: 10px;

    h1 {
        margin: .7rem 2rem;
        font-weight: 100;
        font-size: 1.2rem;
        color: ${ (props) => props.color || 'white' };
    }

    p {
        margin: .7rem 2rem;
        font-weight: 100;
        font-size: 1.2rem;
        color: ${ (props) => props.color || 'white' };
    }
`
export default Section;