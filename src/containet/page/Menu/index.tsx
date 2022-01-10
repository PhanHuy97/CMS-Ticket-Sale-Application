
import { useState } from 'react';
import Tag from '../../../component/tags';
import home from "../../../assets/svg/icon/home.svg"
import list from "../../../assets/svg/icon/list.svg"
import setting from "../../../assets/svg/icon/setting.svg"
import ticket from "../../../assets/svg/icon/ticket.svg"
import style from "./menu.module.scss"
import logo from '../../../assets/svg/img/logo.svg';


function Menu(): JSX.Element{

    const [ selected,setSelected ] = useState('Trang chủ')

    const handleClick = (value: string) =>{
        setSelected(value)
    }   

    return (
        <div className={style.menu}>
            <img src={logo} alt="" />
            <div className={style.pb59}></div>
            <Tag selected={selected==='Trang chủ'} icon={home} link='/' handleClick={handleClick}>Trang chủ</Tag>
            <Tag selected={selected==='Quản lí vé'} icon={ticket} link='/TicketControl' handleClick={handleClick}>Quản lí vé</Tag>
            <Tag selected={selected==='Đối soát vé'} icon={list} link='/TicketManager' handleClick={handleClick}>Đối soát vé</Tag>
            <Tag selected={selected==='Cài đặt'} icon={setting} link='/Setting' handleClick={handleClick}>Cài đặt</Tag>
        </div>
    );
}

export default Menu;