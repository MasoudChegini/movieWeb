import React from "react";
import { saidBarItems } from "../../config/sidbar";
import { useNavigate } from "react-router-dom";
import SideBarListItems from "./SideBarListItems";

function SideBarItems() {
  const nav = useNavigate();
  const urlPath = location.pathname;
  return (
    <>
      {saidBarItems.map((item, index) => (
        <div className="flex flex-col gap-7 pl-9 pr-14 ">
          <h2>{item.title}</h2>
          <ul className="flex flex-col gap-6">
            {item.subtitle.map((item, index) => (
              <li
                key={index}
                className="font-lato"
                onClick={(e) => nav(item.url)}
              >
                <SideBarListItems
                  key={index}
                  icon={item.icon}
                  name={item.name}
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default SideBarItems;
