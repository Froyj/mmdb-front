import { useEffect, useState } from 'react';

const useBookingPrice = (booking) => {
  const [bookingPrice, setBookingPrice] = useState(0);

  const getNumberOfDay = (date1, date2) => {
    const difference = date1.getTime() - date2.getTime();
    const days = Math.ceil(difference / (1000 * 3600 * 24));
    return days;
  };

  const getHomeRentPrice = (bookingInfos = {}) => {
    const {
      number_of_renter: personCount,
      arrival_date: arrival,
      departure_date: departure,
      home_to_rent: house,
    } = bookingInfos;

    const stayFees = 2;
    const houseKeepingFees = 60;
    const numberOfDays =
      departure && arrival
        ? getNumberOfDay(new Date(departure), new Date(arrival))
        : 0;
    const total =
      ((house?.price_by_night || 0) + stayFees) * personCount * numberOfDays +
      houseKeepingFees;
    return Math.abs(total);
  };

  const getOptionsPrice = (optionsList = []) => {
    const total = optionsList
      .map((o) => o.quantity * o.price)
      .reduce((a, b) => a + b, 0);
    return Math.abs(total);
  };

  useEffect(() => {
    if (booking) {
      const { options } = booking;
      const newPrice = getHomeRentPrice(booking) + getOptionsPrice(options);
      setBookingPrice(newPrice);
    }
  }, [
    booking.user,
    booking.home_to_rent,
    booking.number_of_renter,
    booking.options,
    booking.arrival_date,
    booking.departure_date,
  ]);

  return bookingPrice;
};

export default useBookingPrice;
