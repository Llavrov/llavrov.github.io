import React from 'react';
import '../scss/add.scss';
import logo from '../assets/logo.png';
import {Link} from 'react-router-dom';

function Header({headitems, onClickItem}){
    return (
        <div className="header">
            <div className="container_h">
                <Link to='/'> 
                    <div className="header__logo">
                        <a href="/" className="logo">
                            <img src={logo} width="50" alt="ops"/>
                        </a>
                    </div>
                </Link>
                <Link to='/Card'>
                    <ul>
                        {headitems.map((name, index) => (
                            <li 
                            className= "active"
                            onClick={() => onClickItem(name)}
                            key={`${name}_${index}`}>
                                <a href="/">
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </Link>
                <div className="header__cart">
                </div>
            </div>
        </div>
    )
}

export default Header;