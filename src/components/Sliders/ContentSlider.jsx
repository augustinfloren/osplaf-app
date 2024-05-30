import React, { useEffect, useRef } from 'react';
import './ContentSlider.scss';

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
    name: "Mise en situation du jeu",
    url: image1
  },
  {
    name: "Contenu du jeu",
    url: image2
  },
  {
    name: "Livret du jeu",
    url: image3
  },
  {
    name: "Ensemble des cartes du jeu",
    url: image4
  }
];
  
function ContentSlider() {
  return (
    <div className='content-slider'>
      <swiper-container
        slides-per-view="2.2"
        centered-slides="true"
        navigation="true"
        loop="true"
        navigation-prevEl=".swiper-button-prev"
        navigation-nextEl=".swiper-button-next"
      >
        {images.map((image, index) => (
          <swiper-slide key={index} >

            <div className='img-container'>
              <img src={image.url} alt={image.name} loading="lazy"/>
            </div>
          </swiper-slide>
        ))}

        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </swiper-container>
    </div>
  );
}

export default ContentSlider;
