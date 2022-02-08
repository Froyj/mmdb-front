import { useState } from "react";
import styled from "styled-components";
import FilledButton from "./styled-components/FilledButton";

// eslint-disable-next-line react/prop-types
function Equipments({ homeEquipments = null }) {
    if (!homeEquipments) {
      return null;
    }
  
    const roomsList = Object.keys(homeEquipments.equipment);
  
    const [displayEquipments, setDisplayEquipments] = useState("")

    const handleClick = (panelName) => {
      if (panelName === displayEquipments) {
        setDisplayEquipments("");
      } else {
        setDisplayEquipments(panelName);
      }
    };

    return (
      <EquipmentInfo>
        <FilledButton
          type='button'
          onClick={handleClick("equipments")}
          className="dropDown-title"
        > 
          <h3> Equipements </h3>
        </FilledButton>
        {roomsList.map((room) => (
          <EquipmentItem
          className={`equipments-list ${
            displayEquipments === "equipments" ? "visible" : ""
          }`}
          >
            <RoomTitle>
              <h3> {room} </h3>        
            </RoomTitle>
            <Items>
              {homeEquipments.equipment[room]
                .map((equipment) => (
                  <p key={equipment.id}> {equipment.name} </p>
                ))}
            </Items>
          </EquipmentItem> ))}
        </EquipmentInfo>
    );
  }
  
  export default Equipments;
  
  const EquipmentInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
  `
  const EquipmentItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: .5rem;

    @media screen and (max-width: 600px) {
     padding: .5rem 0 
    }
  `
  const RoomTitle = styled.div`
    width: 30%;
  
    h3 {
      text-align: right;
      margin: .5rem 0
    }

    @media screen and (max-width: 600px) {
      width: 40%
    }
  `
  const Items = styled.div`
    margin: 0 1rem;
  
    p {
      padding: .5rem 0
    }
  `