import React, { createContext, useState } from "react";

export const CursorContext = createContext();

const CursorContextProvider = (props) => {
  const [Cursor, setCursor] = useState({ active: false });

  return (
    <CursorContext.Provider value={[Cursor, setCursor]}>
      {props.children}
    </CursorContext.Provider>
  );
};

export default CursorContextProvider;