import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import man from "../../assets/image/man.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

let Slider_in = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={man} style={{width: '30rem'}}/></SwiperSlide>
      <SwiperSlide><img src={man} style={{width: '30rem'}}/></SwiperSlide>
      <SwiperSlide><img src={man} style={{width: '30rem'}}/></SwiperSlide>
      <SwiperSlide><img src={man} style={{width: '30rem'}}/></SwiperSlide>
      <SwiperSlide><img src={man} style={{width: '30rem'}}/></SwiperSlide>
      <SwiperSlide><img src={man} style={{width: '30rem'}}/></SwiperSlide>
      <SwiperSlide><img src={man} style={{width: '30rem'}}/></SwiperSlide>
      <SwiperSlide><img src={man} style={{width: '30rem'}}/></SwiperSlide>
      .3.
    </Swiper>
  );
};

export default Slider_in