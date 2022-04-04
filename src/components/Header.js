import React from "react";
import { Link } from "react-router-dom";

const Header = ({ children }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#666666",
          color: "#ffffff",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h1>
            <Link to="/">Angelica Koumanakou</Link>
          </h1>
          <span>This is our website</span>
        </div>
        {children}
      </div>
    </>
  );
};

export default Header;
