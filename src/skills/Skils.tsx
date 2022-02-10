import React from 'react';
import style from './Skills.module.css'
import styleContainer from './../common/style/Container.module.css'
import Skill from './skill/Skill';

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div
                className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2>SKILLS</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} descriptions={'Lorem23'}/>
                    <Skill title={'JS'} descriptions={'Lorem23'}/>
                    <Skill title={'JS'} descriptions={'Lorem23'}/>
                    <Skill title={'CSS'}
                           descriptions={'Lorem23 sdf sdf sdfsdf sdf'}/>
                    <Skill title={'React'}
                           descriptions={'Lorem23 sdfsf sdfsdf sdfsf'}/>

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