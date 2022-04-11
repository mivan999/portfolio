import React from 'react';
import style from './Projects.module.css'
import styleContainer from './../common/style/Container.module.css'
import Project from './project/Project';

const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    <Project title={'ToDo'} descriptions={'Todolist redux react-redux'}/>
                    <Project title={'SocNetwork'}
                           descriptions={'social network react typescript'}/>

                    <Project title={'Next Project'}
                           descriptions={'my project'}/>

                </div>
            </div>

        </div>
    );
};

export default Projects;