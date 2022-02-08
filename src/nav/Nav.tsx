import React from 'react';
import style from './Nav.module.css'
import styleContainer from './../common/style/Container.module.css'

const Nav = () => {
    return (
        <div className={styleContainer.container}>
            <div className={`${style.nav} `}>
                <a href="/">Главная</a>
                <a href="/">Скилы</a>
                <a href="/">Проекты</a>
                <a href="/">Контакты</a>
            </div>
        </div>
    );
};

export default Nav;