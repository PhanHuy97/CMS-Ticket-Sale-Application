
import { Calendar } from 'antd';
import style from './calendar.module.scss'

function CalendarCustom() {
     
    return (
        <div>
                <div className={style.wapper}>
                <Calendar fullscreen={false}/>
                </div>
        </div>
    );
}

export default CalendarCustom;