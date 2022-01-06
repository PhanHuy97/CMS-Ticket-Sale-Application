import React from 'react';
import Avatar from 'antd/lib/avatar/avatar';
import BeilIcon from './BellIcon';
import MailIcon from './mailIcon/MailIcon';
import style from './infor.module.scss';
import avatar from '../../../assets/svg/img/avatar.svg';


function InformationUser() {
    return (
        <div className={style.waper}>
            <MailIcon/>
            <BeilIcon/>
            <Avatar size={48} src={avatar}/>
        </div>
    );
}

export default InformationUser;