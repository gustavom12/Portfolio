import React,{} from "react";
// import Swiper core and required modules
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
function Carrousel ({imagesUrls, delay, children}:{imagesUrls:Array<string>,delay?:number, children?:any}){
  SwiperCore.use([Autoplay]);
  return(
    <Swiper
      // slidesPerView={slides}
      // slidesPerGroup={slides}
      autoplay={{ delay: delay || 3400 }}
      loop= {true}
      // observer= {true}
      style={{
        width:"100%"
      }}
    >
      {imagesUrls.map((url, i)=>
        <SwiperSlide >
          <img src={url} key={i} alt="" />
        </SwiperSlide >
      )}
      {children}
    </Swiper>
  )
}
export default Carrousel
