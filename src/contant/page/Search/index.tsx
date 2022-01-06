import React from 'react';
import search from '../../../assets/svg/icon/search.svg'
import style from './search.module.scss'

function Search() {
    return (
        <div className={style.waper}>
            <input type="text" placeholder="Search" className={style.input}/>
            <div className={style.group}>
                <img src={search} alt="search" className={style.icon}/> 
            </div>
        </div>
    );
}

export default Search;