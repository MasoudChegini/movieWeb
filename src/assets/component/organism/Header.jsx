import { RiSearch2Line } from "react-icons/ri";

function Header() {
  return (
    <div className="flex gap-20 pb-11 w-full ">
      <ul className="flex gap-16 w-full">
        <li>Movies</li>
        <li className="font-lato ">TV Shows</li>
        <li>Anime</li>
      </ul>
      <div className="flex items-center relative w-full">
        <span className="absolute p-2 right-1">
          <RiSearch2Line />
        </span>
        <input
          className=" bg-gray-500 p-1 rounded-lg"
          placeholder="Search"
          type="text"
        />
      </div>
    </div>
  );
}

export default Header;
