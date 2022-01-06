import { Row } from 'antd';
import date from "../../assets/svg/icon/date.svg"
import Graph from './Graph';
import style from "./home.module.scss";

function Home() {
    return (
        <div>
            <Row>
                <span className={style.header}>Thống kê</span>
            </Row>
            <Row justify="space-between" style={{width:"100%", alignItems: "center" , marginTop:"31px"}}>
                <span className={style.title}>Doanh thu</span>
                <div className={style.waper}>
                    <span className={style.lable}>Tháng 4,2021</span>
                    <img src={date} alt="" className={style.icon}/>
                </div>
            </Row>
            <Graph/>
        </div>
    );
}

export default Home;