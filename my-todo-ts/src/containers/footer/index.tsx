import React from 'react';
import TodoModal from "./addTodo";
import ShowCompletedModal from "./showCompleted";
import styles from './index.module.css';

function Footer() {
    return (
        <div className={styles.footer}>
            <TodoModal />
            <ShowCompletedModal />
        </div>
    );
}

export default Footer;