import React from "react";
import Logo from "../atoms/Logo";
import SideBarItems from "../molecules/SideBarItems";

function SideBar() {
  return (
    <div className="flex flex-col gap-14 pb-28 ">
      <Logo />
      <SideBarItems />
    </div>
  );
}

export default SideBar;
