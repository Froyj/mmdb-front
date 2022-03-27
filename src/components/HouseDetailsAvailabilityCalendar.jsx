import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import styled from 'styled-components';

const HouseDetailsAvailabilityCalendar = ({bookedDates}) => (
    <div className='demo-app'>
      <CalendarContainer>
        <FullCalendar
          contentHeight='300px'
          plugins={[dayGridPlugin, interactionPlugin]}
          initialEvents={bookedDates}
        />
      </CalendarContainer>
    </div>
  );

const CalendarContainer = styled.div`
  width: 400px;
  height: 400px;
`;

export default HouseDetailsAvailabilityCalendar;
