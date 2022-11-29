import React from 'react';
import style from './InputComponent.module.css';

const InputComponent = () => {
    return (
        <div className={style.input}>
            <input type="text" placeholder={'Search'}/>
        </div>
    );
};

export default InputComponent;