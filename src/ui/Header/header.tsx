import React from 'react';
import styles from "./header.module.scss"


const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.header}>Добавление товара</div>
                <select className={styles.select} disabled={true}>
                    <option value="по умолчанию">по умолчанию</option>
                </select>
        </div>
    );
};

export default Header;