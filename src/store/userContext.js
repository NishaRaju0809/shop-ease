import { createContext, useEffect, useState } from "react";
import { authStateChangeListener, createUserDoc } from "../utils/firebase";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    authStateChangeListener((user) => {
      setUser(user);
      if (user) {
        createUserDoc(user);
      }
    });
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
