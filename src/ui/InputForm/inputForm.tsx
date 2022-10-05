import React, {useState} from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import {InputType} from '../Main/main';
import styles from "./inputForm.module.scss"

type InputForm = {
    id: string,
    title: string,
    label: string,
    height?: string
    requiredField: boolean
    inputValidation?: boolean,
    data: { [key: string]: InputType }
    setState: Function
}

const InputForm = ({
                       title,
                       height,
                       requiredField,
                       label,
                       id,
                       data,
                       setState
                   }: InputForm) => {
    return (
        <div className={styles.inputWrapper}>
            <div className={styles.inputTitleWrapper}>
                <div className={styles.inputTitle}>{title}</div>
                {requiredField ? <div className={styles.dot}></div> : null}
            </div>
            <div className={styles.wrapper}>
                <input placeholder={label} style={{height: height}} type="text" className={`${styles.input}`}
                       onChange={(e) => {
                           console.log()
                           if (e.currentTarget.value.length) {
                               setState({...data, [id]: {...data[id], inputValidation: true}})
                           } else
                               setState({...data, [id]: {...data[id], inputValidation: false}})
                       }}/>
            </div>
        </div>
    );
};

export default InputForm;