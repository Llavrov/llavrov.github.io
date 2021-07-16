import React from 'react';
import '../../scss/clasters.scss';
import { Clasters_slider } from '../../components';

let flag = true;

function Clasters({ schools }) {
    let typeStart, descriptionStart;
    React.useEffect(() => {
        if (schools[0] != undefined && flag){
            flag = false;
            typeStart = schools[0].type;
            descriptionStart = schools[0].description;
            toNext();
        }
    })

    const [activeIndex, setActiveIndex] = React.useState(0);
    const [type, setType] = React.useState(typeStart);
    const [description, setDescription] = React.useState(descriptionStart);
    
    const toNext = () => {
        setActiveIndex(nextImgIndex);
        setType(schools[nextImgIndex].type);
        setDescription(schools[nextImgIndex].description);
    };

    // Вычисляем индекс предыдущего слайда
    const prevImgIndex =  ((activeIndex - 1) >= 0 ? (activeIndex - 1) % schools.length : schools.length - 1);
    
    // Вычисляем индекс следующего слайда
    const nextImgIndex = (activeIndex + 1) % schools.length;

    return (
        <div className="container_claster"
        onClick={toNext}>
            <div className="ClasterName">
                <p>Кластеры</p>
            </div>
            <div className="Image_and_text">
                <div className="ClasterImg">
                    <Clasters_slider 
                    ListImages={schools} 
                    index={activeIndex} 
                    nextIndex={nextImgIndex} 
                    prevIndex={prevImgIndex}/>
                </div>
                <div className="text_claster">
                    <div className="typeClasterText">
                        <p>{type}</p>
                    </div>
                    <div className="text_to_img">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Clasters;
