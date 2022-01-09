

import Button from '../../component/Button';
import glass from '../../assets/svg/icon/glass.svg';
import style from './ticketControl.module.scss';
import Search from '../page/Search';

function TicketControl() {
    return (
        <div className={style.waper}>
            <span className={style.header}>Danh sách vé</span>
            <div className={style.search}>
                <Search placeholder='Tìm bằng số vé' background='#F7F7F8' width={446}/>
                <div className={style.buttonWaper}>
                    <Button icon={glass} type='outline' size='xl' marginRight={10}>Lọc vé</Button>
                    <Button type='outline' size='xl'>Xuất file (.csv)</Button>
                </div> 
            </div>
            
        </div>
    );
}

export default TicketControl;