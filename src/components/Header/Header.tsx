import React from 'react';
import style from './Header.module.css'
const Header = () => {
    return (
        <div className={style.nav}>
            <h3 className={style.logo}>Nice <span>Day</span></h3>
        </div>
    );
};

export default Header;