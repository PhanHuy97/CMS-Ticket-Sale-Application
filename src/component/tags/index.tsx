import clsx from 'clsx';
import { Link } from 'react-router-dom';
import style from './tags.module.scss'

interface TagType {
    selected: boolean;
    children: string;
    icon: string;
    link: string;
    handleClick: (value: string) => void;
}

function Tag({ selected,children,icon,link,handleClick }: TagType): JSX.Element{
    return (
        <Link to={link} className={clsx(style.tag, {
            [style.active]: selected
        })} onClick={()=>{handleClick(children)}}>
            <img src={icon} alt="icon" className={style.icon}/>
            <span className={style.title}>{children}</span>            
        </Link>
    );
}

export default Tag;