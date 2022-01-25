import styled from 'styled-components';

function Footer() {
    return (
        <Navbar>
            <p> Contact </p>
            <p> Mentions légales </p>
        </Navbar>
    )
}

const Navbar = styled.nav`
    display: flex;
    background: #5d7b4c;
    height: 5rem;
    font-family: 'Trebuchet MS';
    color: white;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export default Footer;