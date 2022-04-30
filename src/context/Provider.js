import { useState } from "react";
import { MyContext } from "./Context";

export const Provider = ({ children }) => {
  const [screen, setScreen] = useState(0);

  return (
    <MyContext.Provider
      value={{
        screen,
        setScreen,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
