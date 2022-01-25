import { createContext } from 'react';
import { PropTypes } from "prop-types";

const UserContext = createContext(null);

function UserContextProvider({ children, value }) {
  UserContextProvider.propTypes = {
    children: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,

  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export { UserContext, UserContextProvider };
