import React from "react";
import { useHistory } from "react-router";

const LoginScreen = () => {
  const history = useHistory();

  const _handleLogin = () => {
    history.replace("/men");
  };
  return (
    <>
      <div className="container mt-5 text-center">
        <h1 className="my-3 text-white">BIENVENIDO</h1>
        <img src="/assets/animate.gif" alt="animate" className="my-5" />
      </div>
      <div className="text-center">
        <button
          type="button"
          className="btn btn-outline-light btn-lg"
          onClick={_handleLogin}
        >
          Login
        </button>
      </div>
    </>
  );
};

export default LoginScreen;
