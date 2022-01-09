import React from 'react';
import search from '../../../assets/svg/icon/search.svg'
import style from './search.module.scss'

interface SearchType {
    placeholder?: string,
    background?: string,
    width?: number
}

function Search({ placeholder,background,width  } : SearchType) {
    return (
        <div className={style.waper} style={{background: background ||'#ededed', width: width || 470}}>
            <input type="text" placeholder={placeholder || 'Search'} className={style.input}/>
            <div className={style.group}>
                <img src={search} alt="search" className={style.icon}/> 
            </div>
        </div>
    );
}

export default Search;