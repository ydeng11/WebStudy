import styles from './index.module.css'

function Header(props : { today: Date }) {
    return (
        <div>
            <header className={styles.header}>
                <h1 className={styles.date}>{props.today.toDateString()}</h1>
            </header>
        </div>
    );
}

export default Header;