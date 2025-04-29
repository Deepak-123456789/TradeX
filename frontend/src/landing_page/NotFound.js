import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      className="container p-5 mb-5 text-center"
      style={{ minHeight: "75vh" }}
    >
      <h1 className="mt-5">404 Not Found!</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary mt-3 btnx">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
