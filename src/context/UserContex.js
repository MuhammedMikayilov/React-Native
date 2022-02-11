import React from "react";

const UserContext = React.createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = React.useState();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContxt = () => {
  const userContext = React.useContext(UserContext);
  return userContext;
};
