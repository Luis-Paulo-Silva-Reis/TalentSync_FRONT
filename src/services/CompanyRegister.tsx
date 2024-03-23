import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

export async function CompanyRegisterService(body) {
  try {
    const response = await axios.post(
      "http://localhost:5162/Company/login",
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error: ", error);
    return [];
  }
}

export async function verifyTokenService(token) {
  try {
    const response = await axios.post(
      "http://localhost:5162/Company/verify-token",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return { valid: response.status === 200 };
  } catch (error) {
    console.error("Error during token verification: ", error.response?.status);
    return {
      valid: false,
      message: error.response?.data || "Token verification failed",
    };
  }
}

// Example usage inside a React component
export function Login() {
  const navigate = useNavigate(); // use useNavigate hook for navigation

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleLogin = async (loginDetails) => {
    const tokenResponse = await CompanyRegisterService(loginDetails);
    if (tokenResponse && tokenResponse.token) {
      const verifyResponse = await verifyTokenService(tokenResponse.token);
      if (verifyResponse && verifyResponse.valid) {
        // Token is valid, redirect to another page
        navigate("/another-page"); // Use navigate for redirection
      } else {
        // Handle the case where the token is invalid
        console.error("Token is invalid");
        // Potentially redirect to a login error page or display an error message
      }
    } else {
      // Handle the case where login failed to retrieve a token
      console.error("Login failed");
      // Potentially redirect to a login error page or display an error message
    }
  };
}

export default Login;
