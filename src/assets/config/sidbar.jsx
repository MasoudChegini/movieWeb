import { RiHomeSmileLine } from "react-icons/ri";
import { FaCcDiscover } from "react-icons/fa6";
import { LiaAwardSolid } from "react-icons/lia";
import { BsPatchCheck } from "react-icons/bs";
import { MdOutlineRecentActors } from "react-icons/md";
import { RiAiGenerate } from "react-icons/ri";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { CgPlayListAdd } from "react-icons/cg";
import { IoCheckboxOutline } from "react-icons/io5";
import { LuSettings } from "react-icons/lu";
import { TbLogout2 } from "react-icons/tb";

export const saidBarItems = [
  {
    title: "Menu",
    subtitle: [
      {
        icon: <RiHomeSmileLine />,
        name: "Home",
        url: "/home",
      },
      {
        icon: <FaCcDiscover />,
        name: "Discover",
        url: "/discover",
      },
      {
        icon: <LiaAwardSolid />,
        name: "Awards",
        url: "/awards",
      },
      {
        icon: <BsPatchCheck />,
        name: "Celebrities",
        url: "/celebrities",
      },
    ],
  },
  {
    title: "Liberary",
    subtitle: [
      {
        icon: <MdOutlineRecentActors />,
        name: "Recent",
        url: "/recent",
      },
      {
        icon: <RiAiGenerate />,
        name: "Top Rate",
        url: "/toprate",
      },
      {
        icon: <IoCloudDownloadOutline />,
        name: "Downloaded",
        url: "/downloaded",
      },
      {
        icon: <GrFavorite />,
        name: "Playlists",
        url: "/Playlists",
      },
      {
        icon: <CgPlayListAdd />,
        name: "Watchlist",
        url: "/watchlist",
      },
      {
        icon: <IoCheckboxOutline />,
        name: "Completed",
        url: "/completed",
      },
    ],
  },
  {
    title: "General",
    subtitle: [
      {
        icon: <LuSettings />,
        name: "Settings",
        url: "/settings",
      },
      {
        icon: <TbLogout2 />,
        name: "Log Out",
        url: "/logout",
      },
    ],
  },
];
