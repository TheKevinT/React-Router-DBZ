import React, { useEffect, useReducer } from "react";
import LoginRouter from "./Routes/LoginRouter";
import { AuthContext } from "./Context/AuthContext";
import { AuthReducer } from "./Reducers/AuthReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("log")) || { log: false };
};

const App = () => {
  const [log, dispatch] = useReducer(AuthReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("log", JSON.stringify(log));
  }, [log]);

  return (
    <>
      <AuthContext.Provider
        value={{
          log,
          dispatch,
        }}
      >
        <LoginRouter />
      </AuthContext.Provider>
    </>
  );
};

export default App;
