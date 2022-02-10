import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import img1 from "../../assets/images/aboutimg-1.png";
import img2 from "../../assets/images/aboutimg-2.jpg";
import img3 from "../../assets/images/aboutImg-3.jpg";
// import img4 from "../assets/images/aboutimg-4.jpeg";
// import img5 from "../assets/images/aboutimg-5.jpg";

import "swiper/css/pagination";
import { Pagination } from "swiper";
const Slider = () => {
  return (
    <Swiper
      direction={"vertical"}
      spaceBetween={150}
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
      modules={[Pagination]}
      slidesPerView={3}>
      <SwiperSlide>
        <img alt="" src={img1} />
      </SwiperSlide>
      <SwiperSlide>
        <img alt="" src={img2} />
      </SwiperSlide>
      <SwiperSlide>
        <img alt="" src={img3} />
      </SwiperSlide>
    </Swiper>
  );
};
export default Slider;
