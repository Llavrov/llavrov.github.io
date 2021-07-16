import React from 'react'
// import '../scss/add.scss';
import '../../scss/block-2.scss';
import PropTypes from 'prop-types';
// import LoadingBlock from './LoadingBlock';

function AchiveBlock({ name, image, Index}) {
    const [activeItem, setActiveItem] = React.useState(1);

    const onSelectItem = (index) => {
        console.log(index);
        setActiveItem(index);
    }

    return (
            <li key={`${name}_${Index}`}>
                    <div className={activeItem === Index ? 'box_project' : 'box_project'}
                    onClick={() => onSelectItem(Index)}>
                        <img className="box_acive_img" 
                        src={image} 
                        alt="OOPs">
                        </img>
                    </div>
            </li>
    )
}

AchiveBlock.propTypes = {
    name: PropTypes.string,
    Index: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    isLoading: PropTypes.bool
};

AchiveBlock.defaultProps = {
    name: "---",
    winnder: undefined,
    className: 10,
    isLoading: false,
};

export default AchiveBlock;
