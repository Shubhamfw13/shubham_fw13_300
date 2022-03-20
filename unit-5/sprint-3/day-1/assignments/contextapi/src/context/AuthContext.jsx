const { createContext, useState } = require("react");

export const AuthContext = createContext();

export const AuthContextFunction = ({ children }) => {
  const [isAuth, toggleAuth] = useState(false);

  const toggle = () => {
    toggleAuth(!isAuth);
  };
  return (
    <AuthContext.Provider value={{ isAuth, toggle }}>
      {children}
    </AuthContext.Provider>
  );
};