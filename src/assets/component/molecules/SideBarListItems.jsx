import React from "react";

function SideBarListItems({ icon, name }) {
  return (
    <li className="flex gap-3 items-center font-medium text-[18px]">
      <span>{icon}</span>
      <p>{name}</p>
    </li>
  );
}

export default SideBarListItems;
