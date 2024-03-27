import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CompanyRegisterService,
  verifyTokenService,
} from "../services/CompanyRegister";

function CompanyLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      alert("Email and password are required.");
      return;
    }

    const body = {
      email: email,
      password: password,
    };

    try {
      const registerResponse = await CompanyRegisterService(body);
      if (registerResponse && registerResponse.token) {
        const verifyResponse = await verifyTokenService(registerResponse.token);
        if (verifyResponse && verifyResponse.valid) {
          localStorage.setItem("token", registerResponse.token);
          navigate("/CompanySpace");
        } else {
          alert("Token is invalid, please login again.");
        }
      } else {
        alert("Registration failed, please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred during registration.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default CompanyLogin;
