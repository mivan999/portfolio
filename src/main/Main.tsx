import React from 'react';
import style from './Main.module.css'
import styleContainer from './../common/style/Container.module.css'

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi there</span>
                    <h1>I am Aoron Treaa</h1>
                    <p>frontend Developer</p>
                </div>
                <div className={style.photo}>photo</div>
            </div>

        </div>
    );
};

export default Main;