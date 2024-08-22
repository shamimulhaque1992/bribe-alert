import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';

const HomeHeroSingleSlide = ({ setOpen }) => {
    const isMobile = useMediaQuery({ maxWidth: 700 });
    return (
        <>
        {/* //   className={`tp-slider-area fix pt-5  wow fadeInUp 
      //     ${
      //     isMobile ? "mt-75" : "mt-100"
      //   }`
      // } */}
            <div id="carouselExampleControls"  class="carousel slide" data-ride="carousel">
                <div class={`carousel-inner ${isMobile ? "pt-75" : "pt-100"}`}>
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="/assets/img/slider/Frame 2 (1).png" alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="/assets/img/slider/Frame 2 (1).png" alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="/assets/img/slider/Frame 2 (1).png" alt="Third slide" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </>
    );
};

export default HomeHeroSingleSlide;