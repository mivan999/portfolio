import React from 'react';
import style from './Nav.module.css'
import styleContainer from './../common/style/Container.module.css'

const Nav = () => {
    return (
        <div className={styleContainer.containerNav}>
            <div className={`${style.nav} `}>
                <a href="/">Home</a>
                <a href="/">Skills</a>
                <a href="/">Portfolio</a>
                <a href="/">Contact</a>
                <div className={style.svg}>

                </div>
            </div>
         </div>
    );
};

export default Nav;