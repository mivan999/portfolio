import React from 'react';
import styles from './Footer.module.css'
import styleContainer from '../common/style/Container.module.css';


const Footer = () => {
    return (
        <div className={styles.footerBlock}>

            <div
                className={`${styleContainer.container} ${styles.footerContainer}`}>
                <h2> Footer</h2>
                <div className={styles.footer}>
                  <div className={styles.footerItem}>  footer footer footer</div>
                  <div className={styles.footerItem}>  footer footer footer</div>
                  <div className={styles.footerItem}>  footer footer footer</div>

                </div>
                <div> Все права защищены 2022 </div>
            </div>
        </div>
    );
};

export default Footer;