import React from 'react';
import Item from "./Item/Item";
import style from './ItemsRednder.module.css'
const ItemsRednder = () => {
    return (
        <div className={style.container}>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </div>
    );
};

export default ItemsRednder;