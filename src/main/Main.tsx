import React from 'react';
import style from './Main.module.css'
import styleContainer from './../common/style/Container.module.css'
import Header from '../header/Header';
import Button from '../common/Button/Button';

const Main = () => {
    return (<>
        <Header/>
        <div className={style.mainBlock}>

            <div className={styleContainer.container}>

                <div className={style.text}>
                    <p><span className={style.code}>{"<body>"}</span></p>
                    <span className={style.code}>{"<h1>"}</span>
                    <span className={style.main}>Hi,</span>
                    <h2>I'm Ivan</h2>
                    <h2>web developer</h2>
                    <span className={style.code}>{"<p>"}</span>
                    <p>Frontend developer</p>
                    <span className={style.code}>{"<p>"}</span>
                    <Button/>
                </div>
                {/*<div className={style.photo}>photo</div>*/}
            </div>

        </div>
        </>
    );
};

export default Main;