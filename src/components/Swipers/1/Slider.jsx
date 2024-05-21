import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowRightSquare } from "react-icons/bs";
import { BsArrowLeftSquare } from "react-icons/bs";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./style.scss";

// import required modules
import { Navigation, FreeMode, Pagination } from "swiper/modules";

function Slider() {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          857: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          947: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1050: {
            slidesPerView: 3.5,
            spaceBetween: 30,
          },
          1224: {
            slidesPerView: 4.5,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation, FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper_div">
            <div className="swiper_div_top">
              <img src="../../img/Frame 22.png" alt="" className="top_img" />
              <h4>Mutaxassislar uchun kurslar</h4>
            </div>
            <div className="swiper_div_botton">
              <p>
                Ava mutaxassislarini tayyorlash dasturi xalqaro standartlar
                asosida qurilgan va 5 moduldan iborat bo'lib, MBP, CBA-S,IBA
                sertifikatlaridan.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper_div">
            <div className="swiper_div_top">
              <img src="../../img/Frame 22.png" alt="" className="top_img" />
              <h4>Ota-onalar uchun kurslar</h4>
            </div>
            <div className="swiper_div_botton">
              <p>
                Ota-onalarga ABA terapiyasi bo'yicha treninglar,ota-onalarni
                o'qitish, maxsus bolani tarbiyalash uchun oddiy va amaliy
                vositalar.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper_div">
            <div className="swiper_div_top">
              <img src="../../img/Frame 22.png" alt="" className="top_img" />
              <h4>Malaka oshirish uchun kurslar</h4>
            </div>
            <div className="swiper_div_botton">
              <p>
                Malaka oshirish va kasbiy qayta tayyorlash dasturlari.
                Tinglovchilarga MBP,CBA-S, BCBA,IBA sertifikatlarini va CEU
                bolalarini olish imkonini beradi.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper_div">
            <div className="swiper_div_top">
              <img src="../../img/Frame 22.png" alt="" className="top_img" />
              <h4>Amaliy mashg’ulotlar uchun kurslar</h4>
            </div>
            <div className="swiper_div_botton">
              <p>
                Amaliy mashg'ulotlardan o'tish kurslarda o'rganilgan usullarni
                amalda sinab ko'rish.IBP, IBT (RBT), MBP, CBA-s va IBA
                sertifikatlarini olish shartlari.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper_div">
            <div className="swiper_div_top">
              <img src="../../img/Frame 22.png" alt="" className="top_img" />
              <h4>Nazorat uchun kurslar</h4>
            </div>
            <div className="swiper_div_botton">
              <p>
                Nazorat ostida amaliyot o'tkazish amaliy xulq-atvorni tahlil
                qilish sohasidagi vakolatlarga ega bo'lish jarayonining ajralmas
                qismidir.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
