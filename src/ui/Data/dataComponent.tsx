import React, {useState} from 'react';
import styles from "./dataComponent.module.scss"

const DataComponent = ({title, content, price}: any) => {

    return (
        <div className={styles.dataComponent}>

            <div className={styles.image}></div>
            <div className={styles.headerTitle}>{title}</div>
            <div className={styles.content}>{content}</div>
            <div className={styles.price}>{price}</div>
        </div>
    );
};

export default DataComponent;