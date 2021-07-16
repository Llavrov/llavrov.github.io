import React from 'react'

const SortPopup = React.memo(function SortPopup({items}) {

    const [visiblePopup, setVisiblePopup] = React.useState(false);
    const [activeItem, setActiveItem] = React.useState(1); 
    const sortRef = React.useRef(null);
    const activeLabel = items[activeItem];

    const onSelectItem = (index) => {
        setActiveItem(index);
    };
    
    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup)
    };

    const handleOutsideClick = (e) => {
        if (!e.path.includes(sortRef.current)){
            setVisiblePopup(false);
        }
    }


    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, []);

    return (
        <div 
        ref = {sortRef}
        className="sort">
            <div className="sort-label">
                <b>Сортировка по: </b>
                <span className={visiblePopup ? "rotated" : ""} onClick={() => toggleVisiblePopup()}>{activeLabel}</span>
            </div>
            {visiblePopup && 
            <div className="sort-popup">
                <ul>
                    {items.map((name, index) => (
                        <li 
                        className={activeItem === index ? 'popUpItem-active' : 'popUpItem'}
                        onClick={() => onSelectItem(index)}
                        key={`${name}_${index}`}>
                            {name}
                        </li>
                    ))}
                </ul>
            </div>}
        </div>
    )
});

export default SortPopup;
