import React from 'react';
import '../../scss/claster_slider.scss';

function Clasters_slider({ListImages, index, nextIndex, prevIndex}) {
    let images = [];
    
    for(let i = 0; i < ListImages.length; i+= 1){
        images.push(ListImages[i].imageUrl);
    }

    return (
        <div className="sliderClaster">
            <div className="slider-img slider-img-prev "
                    key={prevIndex}>
                <img className="Claster_image" 
                            src={images[prevIndex]}
                            alt={"1" + prevIndex}/>
            </div>
            <div className="slider-img"
                    key={index}
                    >
                <img className="Claster_image" 
                    src={images[index]}
                    alt="2"/>
            </div>
            <div className="slider-img slider-img-next"
                    key={nextIndex}>
                <img className="Claster_image" 
                src={images[nextIndex]}
                alt="3"/>
            </div>
        </div>
    )
}

export default Clasters_slider;
