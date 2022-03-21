import React from "react";
import { SidebarData } from "./SidebarData";
import Menu from "./Menu";

const Sidebar = () => {
  return (
    <div className=" pb-20">
      {SidebarData.map((item, index) => {
        return <Menu item={item} key={index} />;
      })}
    </div>
  );
};

export default Sidebar;
