import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import ImageContainer from './styled-components/ImageContainer';
import Image from './styled-components/Image';

function Activities ({activities}) {
    Activities.propTypes = {
        activities: PropTypes.string.isRequired,
    }   

    return (
        <ActivitiesContainer>
            <ImageContainer>
                <Image src={activities.img_url} width="250px" height="250px" borderRadius="5px"/>
            </ImageContainer>
            <ActivitiesName><span>{activities.name}</span></ActivitiesName>
        </ActivitiesContainer>
    );
};

const ActivitiesContainer = styled.div`
    border-radius: 5px;
    padding: 5px;
    width: 300px;
    background: linear-gradient(315deg, rgba(186,155,92,1) 0%, rgba(28,44,70,1) 100%);
    color: white;
    cursor: pointer;

    &:hover{
        background: linear-gradient(315deg, rgba(186,155,92,1) 100%, rgba(28,44,70,1) 0%);
    }

    @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    margin: auto;
    margin-bottom: 15px;
}
`;

const ActivitiesName = styled.p`
    font-size: 1.3em;
    text-align: center;
`;

export default Activities;