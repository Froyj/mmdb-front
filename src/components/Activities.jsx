import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import colors from './styled-components/colors';

function Activities ({activities}) {
    Activities.propTypes = {
        activities: PropTypes.string.isRequired,
    }   

    return (
        <StyledLink to="/Services">
        <ActivitiesCard>
                <Image src={activities.img_url}/>
            <TitleSpan>{activities.name}</TitleSpan>
        </ActivitiesCard>
        </StyledLink>
    );
};

const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: ${colors.blue};
    width: 32%;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

const ActivitiesCard = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    background-color: ${colors.lightGreen};
    margin: 1rem;
    height: 20rem;
    box-shadow: 10px 10px 15px;

    @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    height: 20rem;
    margin: auto;
    margin-bottom: 15px;
}
`;

const Image = styled.img`
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    height: 60%;
`;

const TitleSpan = styled.span`
    margin-top: 20px;
    font-size: 2em;
    font-weight: bold;
    color: ${colors.green};
    text-align: center;
`;
export default Activities;