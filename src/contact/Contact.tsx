import React from 'react';
import styles from './Contact.module.css'
import styleContainer from '../common/style/Container.module.css';


const Contact = () => {
    return (
        <div className={styles.contactBlock}>
            <div className={`${styleContainer.container} ${styles.contactContainer}`}>
                <h2 className={styles.title}> Contact</h2>
                <div className={styles.formBlock}>
                    <form className={styles.contactForm}>
                        <div><input type="text"/></div>
                        <div><input type="text"/></div>

                        <textarea/>
                        <button type="submit" className={styles.submitBtn}>Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;