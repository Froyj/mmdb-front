import { PropTypes } from "prop-types";
import styled from "styled-components";
import colors from "./styled-components/colors";

function ServicesPanel({ service }) {
  ServicesPanel.propTypes = {
    service: PropTypes.string.isRequired,
  };

  return (
    <>
      <ServiceCard>
        <Image src={service.img_url} />
        <TitleSpan>{service.name}</TitleSpan>
        <ServicesDescription>{service.description}</ServicesDescription>
      </ServiceCard>
    </>
  );
}

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background-color: ${colors.lightGreen};
  margin: 1.7rem;
  height: 22rem;
  box-shadow: 2px 5px 10px;
  width: 25%;

  

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Image = styled.img`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 60%;
  object-fit: cover;
`;

const TitleSpan = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.green};
  text-align: center;
  margin-top: 20px;
`;

const ServicesDescription = styled.p`
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
`;

export default ServicesPanel;
