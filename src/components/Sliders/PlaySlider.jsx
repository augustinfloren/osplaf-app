import '../Sliders/PlaySlider.scss'

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

import image1 from '../../assets/play-images/1.png'
import image2 from '../../assets/play-images/2.png'
import image3 from '../../assets/play-images/3.png'
import image4 from '../../assets/play-images/4.png'

const images = [
    {
        id: "slide2-1",
        name: "Enfant qui jouent au jeu",
        url: image1
    },
    {
        id: "slide2-2",
        name: "Enfant qui jouent au jeu",
        url: image2
    },
    {
        id: "slide2-3",
        name: "Enfant qui jouent au jeu",
        url: image3
    },
    {
        id: "slide2-4",
        name: "Enfant qui jouent au jeu",
        url: image4
    },
]


function PlaySlider() {
    return (
        <div className="play-slider">
            <swiper-container
                class="mySwiper"
                effect="fade"
                slides-per-view="1"
                navigation="false"
                pagination="true"
                pagination-clickable="true"
                centered-slides="true"
            >
                {images.map((image, index) => (
                <swiper-slide key={image.id}>
                    <img src={image.url} alt={image.name} loading="lazy"/>
                </swiper-slide>
                ))}
            </swiper-container>
        </div>
    )
}

export default PlaySlider;