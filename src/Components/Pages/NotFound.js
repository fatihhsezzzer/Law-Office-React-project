import React from "react";
import { Link } from "react-router-dom"; // react-router-dom'dan Link componentini import ediyoruz

function NotFound() {
  return (
    <section className="error-area">
      <div className="error-item">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="error-text">
              <h1>404!</h1>
              <p>Sorry! The Page Not Found</p>
              <span>
                Oops! The page you are looking for does not exist. It might have
                been moved or deleted.
              </span>
              <Link to="/">Return to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
