import styled from "styled-components";
import colors from "../styled-components/theme/colors";

const Card = styled.div`
        display: flex;
        flex-direction: column;
        border-radius: 15px;
        background-color: ${colors.lightGreen};
        margin: 1.7rem;
        height: 22rem;
        box-shadow: 10px 10px 15px;
        width: 25%;

        @media (max-width: 768px){
            width: 90%;
        }
`;

export default Card;