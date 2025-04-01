import React from "react";
import { Link } from "react-router-dom";
import "./Error.scss";

const Error = () => {
  return (
    <div className="error_main-container">
      <h1>404</h1>
      <h3>Not Found</h3>
      <h4>Sorry, we were unable to find that page</h4>
      <p>
        Uh-oh! Looks like you took a wrong turn. The page you're looking for
        isn't here.
      </p>

      <div className="error-image">
        <img src="/error-2.png" />
      </div>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default Error;
