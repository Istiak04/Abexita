// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import man from './../../image/man.jpg';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import ReviewComponent from './ReviewComponent';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const text = {
  text__1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac massa quis enim egestas mollis at vel est. Quisque id euismod tellus, vitae fringilla augue. Morbi eu commodo est. In vel ante nec mi iaculis laoreet. Aenean ut aliquet massa. Maecenas ut interdum elit. Cras egestas leo ut molestie consequat. Aliquam ullamcorper euismod felis, eget pretium turpis facilisis quis. Sed pulvinar at felis eget tincidunt. Integer mattis dapibus aliquet. Nulla imperdiet justo massa, sed aliquet purus malesuada sed. Quisque non risus est. Integer aliquet nibh sapien, eu tincidunt ex auctor commodo.'
}

export default () => {
  return (
    <div className='container'>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide><ReviewComponent
          img={man}
          text={text.text__1}
        /></SwiperSlide>
        <SwiperSlide><ReviewComponent
          img={man}
          text={text.text__1}
        /></SwiperSlide>
        <SwiperSlide><ReviewComponent
          img={man}
          text={text.text__1}
        /></SwiperSlide>
        <SwiperSlide><ReviewComponent
          img={man}
          text={text.text__1}
        /></SwiperSlide>
        ...
      </Swiper>
    </div>

  );
};
