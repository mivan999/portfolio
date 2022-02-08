import React from 'react';
import styles from './Contact.module.css'
import styleContainer from '../common/style/Container.module.css';


const Contact = () => {
    return (
        <div className={styles.contactBlock}>

            <div
                className={`${styleContainer.container} ${styles.contactContainer}`}>
                <h2> Contact</h2>
                <div className={styles.formBlock}>

                    <form className={styles.form}>
                        <input type="text"/>
                        <input type="text"/>
                        <textarea/>
                    </form>

                </div>
                <button>Send</button>
            </div>
        </div>
    );
};

export default Contact;