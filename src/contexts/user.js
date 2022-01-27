import { createContext } from "react";
import { PropTypes } from "prop-types";

const UserContext = createContext(null);

function UserContextProvider({ children, value }) {
  UserContextProvider.propTypes = {
    children: PropTypes.arrayOf(PropTypes.object).isRequired,
    value: PropTypes.shape({
      isConnected: PropTypes.bool,
      dispatch: PropTypes.func,
    }).isRequired,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export { UserContext, UserContextProvider };
