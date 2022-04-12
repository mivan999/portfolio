import React from 'react';
import style from './Button.module.css'
const Button = () => {
    return (

        <div className={style.Btn}>
            <span className={style.bg}></span>
            <span className={style.base}></span>
            <span className="text">
                {/*<fontsninja-text id="fontsninja-text-85" className="fontsninja-family-variant_sans-serif_400_normal">Contact me!</fontsninja-text>*/}
                Contact me!
            </span>
        </div>

    );
};

export default Button;