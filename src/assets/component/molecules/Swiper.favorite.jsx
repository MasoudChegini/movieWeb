import React, { useRef, useState } from "react";
import ax1 from "../../img/movies/fav1.png";
import ax2 from "../../img/movies/fav2.png";
import ax3 from "../../img/movies/fav3.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import HalfRating from "../atoms/Rating";

// Import Swiper styles

export default function SwiperFavorite() {
  return (
    <div className="mt-14 ">
      <h2 className="font-extrabold text-[30px]">Popular on Honey Movies</h2>
      <br />
      <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
        <SwiperSlide>
          <div className="relative">
            <img src={ax1} />
            <h2 className="text-white absolute top-0 left-0 p-5 font-extrabold   text-[24px] ">
              Loki
            </h2>
            <div className="absolute top-14 left-4">
              <HalfRating />
            </div>
            <div className=" justify-between flex  ">
              <button className="absolute bottom-[10px] left-[10px] bg-gray-600 px-6 py-4 rounded-xl  font-extrabold text-[18px]">
                +
              </button>
              <button className="absolute bottom-[10px] right-[22px]  bg-amber-500 px-6 py-4  rounded-xl text-black font-extrabold text-[18px]">
                Watch Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={ax2} />
            <h2 className="text-white absolute top-0 left-0 p-5 font-extrabold   text-[24px] ">
              Chernobyl
            </h2>
            <div className="absolute top-14 left-4">
              <HalfRating />
            </div>
            <div className=" justify-between flex  ">
              <button className="absolute bottom-[10px] left-[10px] bg-gray-600 px-6 py-4 rounded-xl  font-extrabold text-[18px]">
                +
              </button>
              <button className="absolute bottom-[10px] right-[22px]  bg-amber-500 px-6 py-4  rounded-xl text-black font-extrabold text-[18px]">
                Watch Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.namasha.com/v/rqqucuVw/%D8%A7%D9%86%DB%8C%D9%85%DB%8C%D8%B4%D9%86_Rick_and_Morty_%D8%B1%DB%8C%DA%A9_%D9%88_%D9%85%D9%88%D8%B1%D8%AA%DB%8C_%D9%81%D8%B5%D9%84_1_%D9%82%D8%B3%D9%85%D8%AA_5_%D8%A8%D8%A7_%D8%B2%DB%8C%D8%B1%D9%86%D9%88%DB%8C%D8%B3_%D9%81%D8%A7%D8%B1%D8%B3%DB%8C">
            <div className="relative">
              <img src={ax3} />
              <h2 className="text-white absolute top-0 left-0 p-5 font-extrabold   text-[24px] ">
                Rick and Morty
              </h2>
              <div className="absolute top-14 left-4">
                <HalfRating />
              </div>
              <div className=" justify-between flex  ">
                <button className="absolute bottom-[10px] left-[10px] bg-gray-600 px-6 py-4 rounded-xl  font-extrabold text-[18px]">
                  +
                </button>
                <button className="absolute bottom-[10px] right-[22px]  bg-amber-500 px-6 py-4  rounded-xl text-black font-extrabold text-[18px]">
                  Watch Now
                </button>
              </div>
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
