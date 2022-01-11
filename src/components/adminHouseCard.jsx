import styled from "styled-components";
import axios from "axios";
import { PropTypes } from "prop-types";
import colors from "./styled-components/colors";
import BlankTitle from "./styled-components/BlankTitle";
import BlankButton from "./styled-components/BlankButton";

function AdminHouseCard({ id, name, image }) {
  AdminHouseCard.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  };

  const deleteHouses = () => {
    axios
      .delete("http://localhost:5000/home_to_rent", {
        data: {
          id,
        },
      })
      .then(() => {
        console.log("house deleted");
      })
      .catch((err) => {
        console.log(err);
      });
    }

    return (
      <Card>
        <img src={image} alt={name} />
        <BlankTitle color={colors.blue}>{name}</BlankTitle>
        <Buttons>
          <BlankButton borderColor={colors.green}>Visualiser</BlankButton>
          <BlankButton borderColor={colors.green}>Modifier</BlankButton>
          <BlankButton borderColor={colors.green} onClick={deleteHouses}>
            Supprimer
          </BlankButton>
        </Buttons>
      </Card>
    );
  };


const Card = styled.div`
  display: flex;
  width: auto;
  height: 18rem;
  flex-direction: column;
  justify-content: space-around;
  margin: 0.5rem 1.5rem;

  img {
    height: 11rem;
    width: auto;
    border-radius: 10px;
    box-shadow: 5px 5px 10px;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default AdminHouseCard;
