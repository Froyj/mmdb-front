import { useEffect, useState } from 'react';

const useBookingPrice = (booking) => {
  const [bookingPrice, setBookingPrice] = useState(0);

  const getNumberOfDay = (date1, date2) => {
    const difference = date1.getTime() - date2.getTime();
    const days = Math.ceil(difference / (1000 * 3600 * 24));
    return days;
  };

  const getHomeRentPrice = (bookingInfos = {}) => {
    const { travellersNumber: personCount, arrival, departure, house } = bookingInfos;
    const stayFees = 2;
    const houseKeepingFees = 60;
    const numberOfDays = (departure && arrival) ? getNumberOfDay(new Date(departure), new Date(arrival)) : 0;
    const total =
      ((house?.price_by_night || 0) + stayFees) * personCount * numberOfDays + houseKeepingFees;
    return Math.abs(total);
  };

  const getOptionsPrice = (bookingInfos = {}) => {
    const {options} = bookingInfos;
    const total = options.map(o => o.quantity * o.price).reduce((a, b) => a+b, 0)
    return Math.abs(total)
  }

  useEffect(() => {
    if (booking) {
      const newPrice = getHomeRentPrice(booking) + getOptionsPrice(booking);
      setBookingPrice(newPrice);
    }
  }, [
    booking.user,
    booking.house,
    booking.travellersNumber,
    booking.options,
    booking.arrival,
    booking.departure,
  ]);

  return bookingPrice;
};

export default useBookingPrice;
