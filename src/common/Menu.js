import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <div
        className="flex justify-between text-black items-center px-5 list-none h-16 no-underline text-sm cursor-pointer"
        to={item.path}
        onClick={item.subNav && showSubnav}
      >
        <div className="flex">
          {item.icon}
          <div className="ml-4">{item.title}</div>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </div>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <div
              className="h-16 pl-10 flex items-center no-underline text-black text-sm cursor-pointer"
              to={item.path}
              key={index}
            >
              {item.icon}
              <div className="ml-4">{item.title}</div>
            </div>
          );
        })}
    </>
  );
};

export default Menu;
