import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [alertMessage, setAlertMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (data.message !== "Incorrect password or email") {
        setAlertMessage("Login successful!");
        localStorage.setItem("isLoggedIn", "true");

        setTimeout(() => {
          setAlertMessage("");
          navigate("/");
          window.location.reload();
        }, 1000);
      } else {
        setAlertMessage(data.message || "Incorrect password or email");
        setTimeout(() => {
          setAlertMessage("");
        }, 1000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setAlertMessage("An error occurred while submitting the form.");
      setTimeout(() => {
        setAlertMessage("");
      }, 1000);
    }
  };

  return (
    <div className="row">
      <div className="col-3"></div>
      <div className="signup p-5 col-5">
        <h2 className="mb-4">Login</h2>

        {/* Show success/error alert */}
        {alertMessage && (
          <div
            className={`alert ${
              alertMessage.includes("successful")
                ? "alert-success"
                : "alert-danger"
            }`}
            role="alert"
          >
            {alertMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-success">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
