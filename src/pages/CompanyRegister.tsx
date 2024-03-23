import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CompanyRegisterService,
  verifyTokenService,
} from "../services/CompanyRegister"; // Ensure verifyTokenService is exported and implemented

function CompanyRegister() {
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
          localStorage.setItem("token", registerResponse.token); // Store the token
          navigate("/CompanySpace"); // Navigate to dashboard or appropriate page
        } else {
          alert("Token is invalid, please login again.");
          // Handle invalid token case here
        }
      } else {
        alert("Registration failed, please try again.");
        // Handle registration failure
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred during registration.");
      // Handle errors gracefully in the UI
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

export default CompanyRegister;
