import React from 'react';
import style from './total.module.scss'

function Total() {
    return (
        <div style={{ marginTop: "38px"}}>
            <span className={style.title}>Tổng doanh thu theo tuần</span>
            <div className={style.waper}>
                <span className={style.number}>525.145.000</span>
                <span className={style.unit}>đồng</span>
            </div>
        </div>
    );
}

export default Total;