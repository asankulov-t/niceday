import React from 'react';
import style from './Title.module.css'
type TitleType={
    title:string
}
const Title = (title:TitleType) => {
    return (
        <div className={style.title}>
            <h2>{title.title}</h2>
        </div>
    );
};

export default Title;