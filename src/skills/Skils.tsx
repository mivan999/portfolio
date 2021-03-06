import React from 'react';
import style from './Skills.module.scss'
import styleContainer from './../common/style/Container.module.css'
import Skill from './skill/Skill';

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div
                className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2>SKILLS</h2>
                <div className={style.skills}>
                   <Skill percent={45}/>
                   <Skill percent={75}/>
                   <Skill percent={15}/>
                </div>
                {/*<div className={style.skills}>*/}
                {/*    <Skill title={'JS'} descriptions={'Lorem23'}/>*/}
                {/*    <Skill title={'CSS'}*/}
                {/*           descriptions={'Lorem23 sdf sdf sdfsdf sdf'}/>*/}
                {/*    <Skill title={'React'}*/}
                {/*           descriptions={'Lorem23 sdfsf sdfsdf sdfsf'}/>*/}

                {/*</div>*/}
            </div>

        </div>
    );
};

export default Skills;