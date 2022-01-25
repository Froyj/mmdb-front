import { createContext } from 'react';

const UserContext = createContext(null);

function UserContextProvider({ children, value }) {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export { UserContext, UserContextProvider };
