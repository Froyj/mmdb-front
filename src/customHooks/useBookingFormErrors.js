import { useState, useEffect } from 'react';

const errorMessages = {
  user: 'Vous devez spécifier un utilisateur',
  house: 'Vous devez spécifier une maison',
  arrival: "Vous devez spécifier une date d'arrivée",
  departure: 'Vous devez spécifier une date de départ valide',
};

const useBookingValidation = (booking) => {
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fieldsToCheck = ['user', 'house', 'arrival', 'departure'];
    const errorsCopy = { ...errors };
    fieldsToCheck.forEach((fieldName) => {
      if (!(booking[fieldName]) && !errorsCopy[fieldName]) {
        errorsCopy[fieldName] = errorMessages[fieldName];
      } else {
        delete errorsCopy[fieldName];
      }
    });

    setErrors(errorsCopy);
  }, [booking]);

  return errors;
};

export default useBookingValidation;
