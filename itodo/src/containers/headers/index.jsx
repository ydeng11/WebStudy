import React from 'react';
import styles from './index.module.css'

function Header(props) {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.header_left}>
                    <div className={styles.date}>{props.today.toDateString()}</div>
                </div>
            </header>
        </div>
    );
}

export default Header;