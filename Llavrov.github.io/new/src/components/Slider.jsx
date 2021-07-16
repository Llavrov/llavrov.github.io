import React, {useRef} from "react";
import '../scss/slider.scss';
import {AchiveBlock} from '../components';
import right from '../assets/right.png';
import left from '../assets/left.png';


function Slider({SItems}) {
    // const [Items, setActiveIndex] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    const sliderCheck = useRef(null)

    let position = 0;

    const prevHendler = () => {
        if (position <= -300){
            position += 300;
            sliderCheck.current.childNodes.forEach((element) => {
                element.style = `transform: translateX(${position}px)`;
            });
        }
    }

    const nextHendler = () => {
        if (position >= -600){
            position -= 300;
            sliderCheck.current.childNodes.forEach((element) => {
                element.style = `transform: translateX(${position}px)`;
            });
        }
    }
    
    return (
        <div className="slider">
            <div className="slider_track" ref={sliderCheck}>
                <ul>
                    {SItems.map((obj, index) => {
                        return (
                            <AchiveBlock key={obj.id} {...obj} Index={index}/>
                        )
                    })}
                </ul>
            </div>
            <div className="Slider_button Slider_button_prev" onClick={prevHendler} >
                <img src={left} alt="ops"/>
            </div>
            <div className="Slider_button Slider_button_next" onClick={nextHendler} >
                <img src={right} alt="ops"/>
            </div>
        </div>
    );
}

export default Slider;
