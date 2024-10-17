import React from "react";
import { GoogleLogin } from "@react-oauth/google";

const LoginPage = ({ setIsLoggedIn }) => {
  const handleLoginSuccess = (response) => {
    console.log("Login Success:", response);
    setIsLoggedIn(true); // Update login state
  };

  const handleLoginFailure = (error) => {
    console.error("Login Failed:", error);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Please Login with Google</h2>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginFailure}
      />
    </div>
  );
};

export default LoginPage;
