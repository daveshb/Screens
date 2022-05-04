import { useState } from "react";
import { MyContext } from "./Context";

export const Provider = ({ children }) => {
  const [screen, setScreen] = useState(0);
  const [get, setGet] = useState();

  return (
    <MyContext.Provider
      value={{
        screen,
        setScreen,
        get,
        setGet,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
