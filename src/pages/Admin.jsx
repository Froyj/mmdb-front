import Section from '../components/styled-components/Section';

function Admin() {
    return (
        <div className='admin-page'>
            <Section>
                <p>Statistiques</p>
            </Section>
            <div className='my-houses'>
                <p>Mes maisons des bois</p>
            </div>
            <div className='my-reservations'>
                <p>Mes réservations</p>
            </div>
        </div>
    );
}

export default Admin;