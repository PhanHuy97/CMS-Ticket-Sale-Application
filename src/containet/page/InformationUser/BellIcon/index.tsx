import React from 'react';
import vectorBell from '../../../../assets/svg/icon/vectorBell.svg';
import vectorBell2 from '../../../../assets/svg/icon/vectorBell2.svg';
import style from './bellIcon.module.scss';


function BeilIcon() {
    return (
        <div className={style.waper}>
            <img src={vectorBell} alt="" className={style.bell1}/>
            <img src={vectorBell2} alt="" className={style.bell2}/>
        </div>
    );
}

export default BeilIcon;