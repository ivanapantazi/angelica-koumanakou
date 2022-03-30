import React from "react";

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
          <h1>Angelica Koumanakou</h1>
          <span>This is our website</span>
        </div>
        {children}
      </div>
    </>
  );
};

export default Header;
