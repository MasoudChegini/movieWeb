import React from "react";

import Header from "../organism/Header";

import ProductSwiper from "../molecules/Swiper.home";

import SwiperFavorite from "../molecules/Swiper.favorite";

function Home() {
  return (
    <div className="w-full p-20">
      <Header />
      <div className=" relative">
        <ProductSwiper />
      </div>
      <SwiperFavorite />
    </div>
  );
}

export default Home;
