import React, { useEffect, useRef } from 'react';
import './ContentSlider.scss';
import 'animate.css';
import sliderNavLeft from '../../assets/icons/slider-nav-arrow-left.png';
import sliderNavRight from '../../assets/icons/slider-nav-arrow-right.png';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

import image1 from '../../assets/game-content/osplaf-contenu.png';
import image2 from '../../assets/game-content/osplaf-cartes2.png';
import image3 from '../../assets/game-content/osplaf-livret.png';
import image4 from '../../assets/game-content/osplaf-cartes3.png';

const images = [
  {
    id: "slide1-1",
    name: "Mise en situation du jeu",
    url: image1
  },
  {
    id: "slide1-2",
    name: "Contenu du jeu",
    url: image2
  },
  {
    id: "slide1-3",
    name: "Livret du jeu",
    url: image3
  },
  {
    id: "slide1-4",
    name: "Ensemble des cartes du jeu",
    url: image4
  }
];
  
function ContentSlider() {
  const swiperRef = useRef(null);
  
  useEffect(() => {
    const swiperEl = swiperRef.current;

    const handlePrev = () => swiperEl.swiper.slidePrev();
    const handleNext = () => swiperEl.swiper.slideNext();

    document.querySelector('.swiper-button-prev').addEventListener('click', handlePrev);
    document.querySelector('.swiper-button-next').addEventListener('click', handleNext);

    return () => {
      document.querySelector('.swiper-button-prev').removeEventListener('click', handlePrev);
      document.querySelector('.swiper-button-next').removeEventListener('click', handleNext);
    };
  }, []);

  return (
    <div className='content-slider'>
      <swiper-container
        ref={swiperRef}
        slidesPerView="1"
        navigation="false"
        centered-slides="true"
        loop="true"
        breakpoints = {
          JSON.stringify({
              650:{
                  slidesPerView: 2.2,
                  spaceBetween: 0
              },
              1500:{
                  slidesPerView: 2.2,
                  spaceBetween: 150
              }
          })
        }
      >
        {images.map((image, index) => (
          <swiper-slide key={image.id}>
            <div className='img-container'>
              <img src={image.url} alt={image.name} loading="lazy"/>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
      <div className="swiper-button-prev">
        <img src={sliderNavLeft} alt="Previous" />
      </div>
      <div className="swiper-button-next">
        <img src={sliderNavRight} alt="Next" />
      </div>
    </div>
  );
}

export default ContentSlider;
