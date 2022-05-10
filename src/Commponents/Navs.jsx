import React from "react";

import { LinkStyled, NavList } from "./Navs.Styled";

const LINKS = [
  { to: "/", text: "HOME" },
  { to: "/starred", text: "STARRED" },
];

const Navs = () => {
  return (
    <div>
      <NavList>
        {LINKS.map((item) => (
          <li key={item.to}>
            <LinkStyled to={item.to}>{item.text}</LinkStyled>
          </li>
        ))}
      </NavList>
    </div>
  );
};

export default Navs;
