import React from 'react';
import style from './Item.module.css'
import img from '../../assets/img.png'

const Item = () => {
    return (
        <div className={style.item}>
            <div className={style.img}><img src={img} alt=""/></div>
            <div>
                <h3>Article</h3>
                <p className={style.website}>Website:</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor</p>
            </div>
        </div>
    );
};

export default Item;