import React from 'react';
import '../scss/add.scss';
import '../scss/cart.scss';
import Lion from '../assets/lion.png';
import place from '../assets/special_place.png';
// import design from '../assets/design.png';

import { fetchWinners } from '../redux/actions/winners';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../redux/actions/filters';

import { SortPopup, Slider, Categories, Clasters } from '../components';

function Home({ schools }) {
    const translate = document.querySelectorAll(".translate");
    let flag = 0;
    console.log(schools, "home");

    React.useEffect(() => {
        try {
        window.addEventListener('scroll', () => {
            let scroll = window.pageYOffset;
            // Получаем элемент параллакса
            let elem = document.querySelector('.place_parallax');
            // Берем кординаты от вершины видимой части
            let form_pos;
            (elem == null ? form_pos = 0 : form_pos = elem.getBoundingClientRect().top);
            // Координаты блока с параллаксам
            let parallax_pos = scroll + form_pos;

            if (form_pos < 100 && form_pos > -100 && flag < 60){
                flag += 4;
                translate.forEach(element => {
                    let speed = element.dataset.speed;
                    element.style.transform = `translateX(${ 200 + (- parallax_pos + (scroll * 4 * speed))}px)`;
                });
            }
        });
        } catch (e) {
            if (e instanceof TypeError) {
                console.log('Compiling error');
            }
        }  
    });

    const dispatch = useDispatch();
    const hitems = useSelector(({ winners }) => winners.items);
    const isLoaded = useSelector(({ winners }) => winners.isLoaded);


    React.useEffect(() => {
        if (!hitems.length) {
            dispatch(fetchWinners());
        }
    }, []);
    

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    return (<div className="main">
                <div className="block-1">
                    <div className="School93">
                        {/*<img src={img93} width="500px" alt="ops" />*/}
                        <p>Фотоника</p>
                    </div>
                    <div className="prallax">
                        <div className="back_color"></div>
                        <div className="place_parallax">
                            <img src={place} width="800px" alt="ops"/>
                        </div>
                        <div className="lion_image translate" data-speed="0.2">
                            <img src={Lion} width="350px" alt="ops"/>
                            {/* <img src={design} width="500px" alt="ops"/> */}
                        </div>
                    </div>
                </div>
                {/* ---------------------Block of achievement----------------------- */}
                <div className="block-2">
                    <div className="Achievements">
                        <SortPopup 
                            items = {[
                                "Дате",
                                "Классу",
                                "Призовому месту",
                                ]} 
                        />
                        <div className="container_back">
                            {isLoaded && <Slider SItems={hitems} isLoading={true}/>}
                        </div>
                        {/* <Categories onClickItem={onSelectCategory} 
                            items= {[
                                "Дате",
                                "Классу",
                                "Призовому месту",
                                ]}
                        />  */}
                    </div>
                </div>
                {/* ---------------------Block of clasters----------------------- */}
                <Clasters schools={schools}/>
                
                <div className="block-1"></div>
            </div>
    )
}

export default Home;
