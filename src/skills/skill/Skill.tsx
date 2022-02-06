import React from 'react';
import style from './Skill.module.css'

type PropsType={
    title:string,
    descriptions:string
}
const Skill = (props:PropsType) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}>icon</div>
            <h3>{props.title}</h3>
            <span className={style.descriptions}>{props.descriptions}</span>
        </div>
    );
};

export default Skill;