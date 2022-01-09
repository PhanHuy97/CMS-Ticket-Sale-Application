import clsx from 'clsx';
import style from './button.module.scss'

interface ButtonType {
    type: 'outline'| 'fill',
    size: "m" | "xl",
    children: string,
    icon?: string,
    marginRight?: number
}

function Button({ type, size, children, icon, marginRight } : ButtonType): JSX.Element {
    return (
        <div className={clsx(style.waper, {
            [style.outline]:type==="outline",
            [style.fill]:type==="fill",
            [style.sizem]:size==="m",
            [style.sizexl]:size==="xl",
        })} style={{ marginRight: marginRight}}>
            { icon &&<img src={icon} alt='' className={style.icon}/>}
            <span className={clsx(style.label, {
                [style.outlineLabel]:type==="outline",
                [style.fillLabel]:type==="fill",
                [style.sizemLabel]:size==="m",
                [style.sizexlLabel]:size==="xl"
            })}>{children}</span>
        </div>
    );
}

export default Button;