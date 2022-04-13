import React from 'react';
import style from './Skill.module.scss'

type PropsType={
    // title:string,
     percent:number
}
const Skill = (props:PropsType) => {
    return (

        <div className={style.skill}>
        <div className={style.progress}>
            <span className={style.progressBar}
                  style={{width: props.percent}}>
              111111
            </span>
        </div>
        </div>






        // <div className={style.skill}>
        //     <div className={style.icon}>icon</div>
        //     <h3>{props.title}</h3>
        //     <span className={style.descriptions}>{props.descriptions}</span>
        // </div>
    );
};

export default Skill;