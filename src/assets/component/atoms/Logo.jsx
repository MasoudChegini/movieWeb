import React from "react";
import logo from "../../img/logo/logo.png";
import movieLogo from "../../img/logo/Honey Movies.png";

function Logo() {
  return (
    <div className="flex pt-20 pl-7">
      <img className="w-[59px]" src={logo} alt="movie Honey" />
      <img className="w-[117px]" src={movieLogo} alt="movie Honey" />
    </div>
  );
}

export default Logo;
