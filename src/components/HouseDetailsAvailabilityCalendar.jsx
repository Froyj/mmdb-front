import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import styled from 'styled-components';

const HouseDetailsAvailabilityCalendar = ({ bookedDates, house }) => {

  const getClosingPeriodEvents = (opening, closing) => {
    const events = [];
    const now = new Date();
    const openingDate = new Date(opening);
    const closingDate = new Date(closing);

    const year = closingDate.getFullYear()
    const reopeningDate = new Date(closingDate.getTime())
    reopeningDate.setFullYear(year+1)
    if(now.getTime() > openingDate ) {
      events.push({
        id: 'closing-0',
        title: 'indisponible à la location',
        start: closing.split('T')[0],
        end: reopeningDate.toISOString().split('T')[0],
        backgroundColor: '#a70000'
      })
    } else {
      events.push({
        id: 'closing-1',
        title: 'indisponible à la location',
        start: now.toISOString().split('T')[0],
        end: openingDate.toISOString().split('T')[0],
        backgroundColor: '#a70000'
      },
      {
        id: 'closing-2',
        title: 'indisponible à la location',
        start: closingDate.toISOString().split('T')[0],
        end: reopeningDate.toISOString().split('T')[0],
        backgroundColor: '#a70000'
      })
    }

    return events;
  }

  const unavailablePeriods = getClosingPeriodEvents(house.opening_disponibility, house.closing_disponibility);

  return (
    <div className='demo-app'>
      <CalendarContainer>
        <FullCalendar
          contentHeight='300px'
          plugins={[dayGridPlugin, interactionPlugin]}
          initialEvents={[...bookedDates, ...unavailablePeriods]}
          eventColor=''
        />
      </CalendarContainer>
    </div>
  );
};

const CalendarContainer = styled.div`
  width: 400px;
  height: 400px;
`;

export default HouseDetailsAvailabilityCalendar;
