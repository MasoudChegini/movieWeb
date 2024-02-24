import React from "react";
import SideBar from "../organism/SideBar";

function Layout({ children }) {
  return (
    <div className="flex  bg-black text-white">
      <div className="w-2/12">
        <SideBar />
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Layout;
