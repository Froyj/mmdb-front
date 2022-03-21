import { useEffect, useState } from 'react';

const useBookingBillingDetails = (booking) => {
  const [bookingTotal, setBookingTotal] = useState(0);
  const [optionsTotal, setOptionsTotal] = useState(0);
  const [rentalWithoutFees, setRentalWithoutFees] = useState(0);
  const [rentalWithFees, setRentalWithFees] = useState(0);
  const [houseKeepingFees] = useState(60);
  const [stayFees] = useState(2);

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

    const numberOfDays =
      departure && arrival
        ? getNumberOfDay(new Date(departure), new Date(arrival))
        : 0;
    const homeRental = (house?.price_by_night || 0) * numberOfDays;
    const feesTotal = stayFees * personCount + houseKeepingFees;
    const homeRentalWithFees = homeRental + feesTotal;
    setRentalWithoutFees(Math.abs(homeRental));
    setRentalWithFees(Math.abs(homeRentalWithFees));
    return Math.abs(homeRentalWithFees);
  };

  const getOptionsPrice = (optionsList = []) => {
    const total = optionsList
      .map((o) => o.quantity * o.price)
      .reduce((a, b) => a + b, 0);
    setOptionsTotal(Math.abs(total));
    return Math.abs(total);
  };

  useEffect(() => {
    if (booking) {
      const { options } = booking;
      const newPrice = getHomeRentPrice(booking) + getOptionsPrice(options);
      setBookingTotal(newPrice);
    }
  }, [
    booking.user,
    booking.home_to_rent,
    booking.number_of_renter,
    booking.options,
    booking.arrival_date,
    booking.departure_date,
  ]);

  return {
    optionsTotal,
    rentalWithoutFees,
    rentalWithFees,
    bookingTotal,
    houseKeepingFees,
    stayFees,
  };
};

export default useBookingBillingDetails;
