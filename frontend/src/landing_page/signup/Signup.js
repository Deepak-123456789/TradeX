import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
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
      const response = await fetch(`${process.env.REACT_APP_BACKEND}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.message !== "User already exists") {
        setAlertMessage("Signup successful!");

        setTimeout(() => {
          setAlertMessage("");
          navigate("/");
          window.location.reload();
        }, 500);
      } else {
        setAlertMessage("Signup Failed! User already exists");
        setTimeout(() => {
          setAlertMessage("");
          navigate("/signup");
        }, 1500);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="row">
      <div className="col-3"></div>
      <div className="signup p-5 col-5">
        <h2 className="mb-4">Signup for TradeX</h2>

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
            <label htmlFor="usernameInput" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="usernameInput"
              name="username"
              value={formData.username}
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
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
