"use client";

import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {
  const [loding, setLoding] = useState(null);

  return (
    <GlobalContext.Provider value={{ loding, setLoding }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
