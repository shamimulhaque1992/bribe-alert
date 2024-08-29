import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, {
  Pagination,
  Autoplay,
  A11y,
  EffectFade,
  EffectCards,
} from "swiper";
import { Carousel } from "react-bootstrap";
import HomeHeroSingleSlide from "../../../../components/HomeHeroSingleSlide/HomeHeroSingleSlide";

// install Swiper modules
SwiperCore.use([Pagination, Autoplay, A11y, EffectFade, EffectCards]);

const HeroSection = () => {
  const [isOpen, setOpen] = useState(false);
  const images = [
    "/assets/img/bribe-img/Pade-a-bribe_1920X500.jpg",
    "/assets/img/bribe-img/Bribe-Fighter_1920X500.jpg",
    "/assets/img/bribe-img/Honest-Officer_1920X500.jpg",
  ];

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="o4GuSJYSzrY"
        onClose={() => setOpen(false)}
      />
      <section className="tp-slider-area fix">
        <div className="tp-slider-active home_hero_slide swiper-container common-dots">
          <Carousel interval={3000} fade={true} indicators={true}>
            {images.map((image, index) => (
              <Carousel.Item>
                <HomeHeroSingleSlide setOpen={setOpen} image={image} />
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="swiper-paginations slide-dots"></div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
