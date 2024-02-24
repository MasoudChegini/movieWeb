import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ax1 from "../../img/movies/crown.jpg";
import ax2 from "../../img/movies/chernobyl.png";
import ax3 from "../../img/movies/sherlock.jpg";
import ax4 from "../../img/movies/super hero.jpg";
import ax5 from "../../img/movies/supernatural.jpg";
import ax6 from "../../img/movies/rickmorti.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function ProductSwiper() {
  return (
    <body id="bodySwiper " className="relative max-w-[770px]">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img src={ax1} />
            <h2 className="text-white absolute top-0 left-0 p-10 font-extrabold text-[48px] ">
              The Crown
            </h2>
            <div className=" justify-between flex  ">
              <button className="absolute bottom-[21px] left-[20px] bg-gray-600 px-6 py-5 rounded-xl  font-extrabold text-[18px]">
                + Watchlist
              </button>
              <button className="absolute bottom-[21px] right-[20px]  bg-amber-500 px-12 py-5 rounded-xl text-black font-extrabold text-[18px]">
                Watch Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={ax2} />
            <h2 className="text-white absolute top-0 left-0 p-10 font-extrabold text-[48px] ">
              The Crown
            </h2>
            <div className=" justify-between flex  ">
              <button className="absolute bottom-[21px] left-[20px] bg-gray-600 px-6 py-5 rounded-xl  font-extrabold text-[18px]">
                + Watchlist
              </button>
              <button className="absolute bottom-[21px] right-[20px]  bg-amber-500 px-12 py-5 rounded-xl  text-black font-extrabold text-[18px]">
                Watch Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={ax3} />
            <h2 className="text-white absolute top-0 left-0 p-10 font-extrabold text-[48px] ">
              The Crown
            </h2>
            <div className=" justify-between flex  ">
              <button className="absolute bottom-[21px] left-[20px] bg-gray-600 px-6 py-5 rounded-xl  font-extrabold text-[18px]">
                + Watchlist
              </button>
              <button className="absolute bottom-[21px] right-[20px]  bg-amber-500 px-12 py-5 rounded-xl  text-black font-extrabold text-[18px]">
                Watch Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={ax4} />
            <h2 className="text-white absolute top-0 left-0 p-10 font-extrabold text-[48px] ">
              The Crown
            </h2>
            <div className=" justify-between flex  ">
              <button className="absolute bottom-[21px] left-[20px] bg-gray-600 px-6 py-5 rounded-xl  font-extrabold text-[18px]">
                + Watchlist
              </button>
              <button className="absolute bottom-[21px] right-[20px]  bg-amber-500 px-12 py-5 rounded-xl  text-black font-extrabold text-[18px]">
                Watch Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={ax5} />
            <h2 className="text-white absolute top-0 left-0 p-10 font-extrabold text-[48px] ">
              The Crown
            </h2>
            <div className=" justify-between flex  ">
              <button className="absolute bottom-[21px] left-[20px] bg-gray-600 px-6 py-5 rounded-xl  font-extrabold text-[18px]">
                + Watchlist
              </button>
              <button className="absolute bottom-[21px] right-[20px]  bg-amber-500 px-12 py-5 rounded-xl  text-black font-extrabold text-[18px]">
                Watch Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={ax6} />
            <h2 className="text-white absolute top-0 left-0 p-10 font-extrabold text-[48px] ">
              The Crown
            </h2>
            <div className=" justify-between flex  ">
              <button className="absolute bottom-[21px] left-[20px] bg-gray-600 px-6 py-5 rounded-xl  font-extrabold text-[18px]">
                + Watchlist
              </button>
              <button className="absolute bottom-[21px] right-[20px]  bg-amber-500 px-12 py-5 rounded-xl  text-black font-extrabold text-[18px]">
                Watch Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </body>
  );
}
