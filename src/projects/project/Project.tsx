import React from 'react';
import style from './Project.module.css'

type PropsType = {
    title: string,
    descriptions: string
}
const Project = (props: PropsType) => {
    return (
        <div className={style.project}>
            <div className={style.main}>
                <div className={style.icon}>icon</div>
                <button>Смотреть</button>
            </div>
            <div className={style.main}>
                <h3>{props.title}</h3>
                <span className={style.descriptions}>{props.descriptions}</span>
            </div>
        </div>
    );
};

export default Project;