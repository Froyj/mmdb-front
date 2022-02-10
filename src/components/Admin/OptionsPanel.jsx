import { useState, useEffect, useRef } from 'react';
import axios from '../../helper/axios-config';
import {
  AccordionContainer,
  AccordionInner,
  AccordionItems,
} from './Accordion/Accordion';

const OptionsPanel = () => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    axios.get('/options/details')
    .then(res => res.data)
    .then(setOptions)
  },[])


  const [currentAccordion, setCurrentAccordion] = useState(0);
  const [bodyHeight, setBodyHeight] = useState(0);

  const item0 = useRef(null);
  const item1 = useRef(null);
  const item2 = useRef(null);
  const item3 = useRef(null);
  const item4 = useRef(null);
  const item5 = useRef(null);

  const refs = [item0, item1, item2, item3, item4, item5];

  // const refs = Array.from({length: mealOptions.length}).map(() => useRef(null))
  return (
    <AccordionContainer>
      <AccordionInner>
        <AccordionItems
          accordionContent={options}
          refs={refs}
          currentAccordion={currentAccordion}
          setCurrentAccordion={setCurrentAccordion}
          setBodyHeight={setBodyHeight}
          bodyHeight={bodyHeight}
        />
      </AccordionInner>
    </AccordionContainer>
  );
};

export default OptionsPanel;
