import React, {useState} from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import {InputType} from '../Main/main';
import styles from "./inputForm.module.scss"

type InputForm = {
    id: string,
    title: string,
    label: string,
    height?: string
    setValue?: () => void
    requiredField: boolean
    inputValidation?: boolean,
    setState: Function,
    state: { [key: string]: InputType }
}


const InputForm = ({title, height, setValue, requiredField, label, inputValidation, setState, id, state}: InputForm) => {


    const [active, setActive] = useState(false)

    const [ startValue, setStartValue] = useState("")

    return (
        <div onClick={() => setActive(true)} className={styles.inputWrapper}>
            <div className={styles.inputTitleWrapper}>
                <div className={styles.inputTitle}>{title}</div>
                {requiredField ? <div className={styles.dot}></div> : null}
            </div>
            {/*<OutsideClickHandler onOutsideClick={() => {*/}

            {/*    if(startValue.length) {*/}
            {/*        setState({...state, inputValidation: true })*/}
            {/*    }*/}
            {/*    setStartValue("")*/}
            {/*}}>*/}
                <input style={{height: height}} type="text" className={`${styles.input}`}
                       onChange={(e) => setStartValue(  e.currentTarget.value)}/>
            {/*</OutsideClickHandler>*/}
            {!active ? <div className={styles.label}>{label}</div> : null}
        </div>
    );
};

export default InputForm;