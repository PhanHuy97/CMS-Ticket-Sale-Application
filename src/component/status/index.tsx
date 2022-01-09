import clsx from 'clsx';
import style from './status.module.scss'

interface StatusType {
    children: string,
    status: 'open'| 'end' | 'coming'
}

function Status({ children ,status }: StatusType) {
    return (
        <div className={clsx(style.waper,{
            [style.open]:status==="open",
            [style.end]:status==="end",
            [style.coming]:status==="coming"
        })}>
            <div className={clsx(style.ellip, {
                [style.openEllip]:status==="open",
                [style.endEllip]:status==="end",
                [style.comingEllip]:status==="coming"
            })}></div>
            <span className={clsx(style.title, {
                [style.openTitle]:status==="open",
                [style.endTitle]:status==="end",
                [style.comingTitle]:status==="coming"
            })}>{children}</span>
        </div>
    );
}

export default Status;