import styled, { css } from 'styled-components';
import OptionsSelector from '../../Admin/Booking/BookingForm/OptionsSelector';

const AccordionItems = ({
  accordionContent,
  refs,
  currentAccordion,
  setCurrentAccordion,
  setBodyHeight,
  bodyHeight,
}) =>
  accordionContent.map((category, i) => (
    <AccordionItem key={`accordion-item-${category.id}`}>
      <AccordionTitle
        onClick={() => {
          setCurrentAccordion(i);
          setBodyHeight(refs[i].current.clientHeight);
        }}
      >
        {category.name}
      </AccordionTitle>
      <AccordionBody active={currentAccordion === i} bodyHeight={bodyHeight}>
        <AccordionContent ref={refs[i]}>
          <OptionsSelector mealOptions={category.Option} />
        </AccordionContent>
      </AccordionBody>
    </AccordionItem>
  ));

const AccordionContainer = styled.div``;

const AccordionInner = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid black;
  border-radius: 4px;
`;

const AccordionItem = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid black;
  }
`;

const AccordionTitle = styled.h3`
  margin: 0;
  padding: 1rem;
  cursor: pointer;
`;

const AccordionBody = styled.div`
  display: block;
  position: relative;
  padding: 0;
  margin: 0;
  height: 0;
  overflow: hidden;
  transition: height 0.3s;

  ${({ active, bodyHeight }) =>
    active &&
    css`
      height: ${bodyHeight}px;
    `}
`;

const AccordionContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 0 1rem 1rem;
  height: auto;
`;

export { AccordionContainer, AccordionInner, AccordionItems };
