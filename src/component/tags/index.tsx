import clsx from 'clsx';
import style from './tags.module.scss'

interface TagType {
    selected: boolean;
    children: string;
    icon: string;
}

function Tag({ selected,children,icon}: TagType): JSX.Element{
    return (
        <div className={clsx(style.tag, {
            [style.active]: selected
        })}>
            <img src={icon} alt="icon" className={style.icon}/>
            <span className={style.title}>{children}</span>            
        </div>
    );
}

export default Tag;