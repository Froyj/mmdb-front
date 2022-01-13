import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import colors from './styled-components/colors';
import BlankTitle from './styled-components/BlankTitle';
import BlankButton from './styled-components/BlankButton';

function AdminHouseCard({ name, image }) {
    AdminHouseCard.propTypes = {
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
      }

    return (
        <Card>
            <img src={image} alt={name} />
            <BlankTitle color={colors.blue}>{name}</BlankTitle>
            <Buttons>
                <BlankButton borderColor={colors.green}>Visualiser</BlankButton>
                <BlankButton borderColor={colors.green}>Modifier</BlankButton>
            </Buttons>
        </Card>
    );
}

const Card = styled.div`
    display: flex;
    width: 20%;
    height : 18rem;
    flex-direction: column;
    justify-content: space-around;
    margin: .5rem 1.5rem;

    img {
        height: 11rem;
        width: auto;
        border-radius: 10px;
        box-shadow: 5px 5px 10px;
    }
`

const Buttons = styled.div`
    display: flex;
    justify-content: space-around;
`

export default AdminHouseCard;