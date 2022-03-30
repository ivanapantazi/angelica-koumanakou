import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMenus } from "../services";

const NavBar = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getMenus().then((result) => {
      setMenu(result);
    });
  }, []);
  return (
    <ul
      style={{
        display: "flex",
        listStyle: "none",
        marginRight: "10px",
      }}
    >
      {menu.map(({ name, slug, id }) => (
        <li
          key={id}
          style={{
            marginLeft: "30px",
          }}
        >
          <Link to={`/${slug}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
