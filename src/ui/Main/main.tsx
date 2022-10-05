import React, { useState } from 'react';
import styles from "./main.module.scss"
import InputForm from "../InputForm/inputForm";
import DataComponent from '../Data/dataComponent';

export type InputType = {
    id: string,
    title: string,
    label: string,
    width?: string,
    height?: string,
    activeStatus: boolean,
    requiredField: boolean
    inputValidation?: boolean
}

const data: { [key: string]: InputType } = {
    "Наименование товара": {
        id: "Наименование товара",
        title: "Наименование товара",
        label: "Введите название товара",
        activeStatus: false,
        requiredField: true,
        inputValidation: false
    },
    "Описание товара": {
        id: "Описание товара",
        title: "Описание товара",
        label: "Введите описание товара",
        activeStatus: false,
        requiredField: false,
        height: "_height",
        inputValidation: false
    },
    "Ссылка на изображение товара": {
        id: "Ссылка на изображение товара",
        title: "Ссылка на изображение товара",
        label: "Введите ссылку",
        activeStatus: false,
        requiredField: true,
        inputValidation: false
    },
    "Цена товара": {
        id: "Цена товара",
        title: "Цена товара",
        label: "Введите цену",
        activeStatus: false,
        requiredField: true,
        inputValidation: false
    }
}

const dataGoods = [
    {
        id: "Наименование товара",
        title: "Наименование товара",
        description: "Введите описание товараВведите описание товараВведите описание товараВведите описание товараВведите описание товара",
        price: 10000
    },
    {
        id: "Наименование товара",
        title: "Наименование товара",
        description: "Введите описание товараВведите описание товараВведите описание товараВведите описание товараВведите описание товара",
        price: 10000
    },
    {
        id: "Наименование товара",
        title: "Наименование товара",
        description: "Введите описание товараВведите описание товараВведите описание товараВведите описание товараВведите описание товара",
        price: 10000
    },
    {
        id: "Наименование товара",
        title: "Наименование товара",
        description: "Введите описание товараВведите описание товараВведите описание товараВведите описание товараВведите описание товара",
        price: 10000
    }
]

const Main = () => {
    const [state, setState] = useState(data)
    const condition = state["Наименование товара"].inputValidation && state["Ссылка на изображение товара"].inputValidation && state["Цена товара"].inputValidation

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.inputsWrapper}>
                {
                    Object.values(data).map(
                        input => {
                            return <InputForm
                                id={input.id}
                                key={input.id}
                                title={input.title}
                                label={input.label}
                                requiredField={input.requiredField}
                                inputValidation={input.inputValidation}
                                data={state}
                                setState={setState}
                            />
                        }
                    )
                }
                <button className={condition ? styles.button_active : styles.button}>Добавить товар</button>
            </div>
            <div className={styles.dataWrapper}>
                {
                    dataGoods.map(good => {
                        return <DataComponent key={good.id} price={good.price} content={good.description}
                                              title={good.title}/>
                    })
                }
            </div>
        </div>
    );
};

export default Main;