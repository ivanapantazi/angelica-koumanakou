import React from "react";

const Footer = () => {
  return (
    <div style={{ height: "90px", backgroundColor: "#eeeeee" }}>
      <h3>© {new Date().getFullYear()} Angelica Koumanakou</h3>
      <span>Developed by IvP Web Services ltd.</span>
    </div>
  );
};

export default Footer;
