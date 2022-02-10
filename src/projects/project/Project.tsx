import React from 'react';
import style from './Project.module.css'

type PropsType = {
    title: string,
    descriptions: string
}
const Project = (props: PropsType) => {
    return (
            <div className={style.project}>
                <div className={style.imgContainer}>
                    <a href={'/'}>Смотреть</a>
                </div>
                <h3>{props.title}</h3>
                <span className={style.descriptions}>{props.descriptions}</span>
            </div>

    );
};

export default Project;