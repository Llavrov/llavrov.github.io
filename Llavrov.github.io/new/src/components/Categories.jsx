import React from 'react';
// import { setCategory } from '../redux/actions/filters';
import '../scss/add.scss';
import '../scss/block-2.scss';

const Categories = React.memo(function Categories({items, onClickItem}) {
    const [activeItem, setActiveItem] = React.useState(null);

    const onSelectItem = (index) => {
        setActiveItem(index);
        onClickItem(index);
    }

    return (
        <div className="container_back">
            <div className="cards">
                <ul>
                    {items.map((name, index) => (
                        <li 
                        className={activeItem === index ? 'box_project_active' : ''}
                        onClick={() => onSelectItem(index)}
                        key={`${name}_${index}`}>
                            {name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
})

export default Categories;