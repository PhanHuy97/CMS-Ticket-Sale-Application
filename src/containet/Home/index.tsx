import { Row } from "antd";
import date from "../../assets/svg/icon/date.svg";
import CalendarCustom from "../../component/calendar";
import DonutGraph from "./DonutGraph";
import Graph from "./Graph";
import style from "./home.module.scss";
import Total from "./Total";

function Home() {
  return (
    <Row className={style.pageWapper}>
      <Row>
        <span className={style.header}>Thống kê</span>
      </Row>
      <Row
        justify="space-between"
        style={{ width: "100%", alignItems: "center", marginTop: "31px" }}
      >
        <span className={style.title}>Doanh thu</span>
        <div className={style.waper}>
          <span className={style.lable}>Tháng 4,2021</span>
          <img
            src={date}
            alt=""
            className={style.icon}
            style={{ cursor: "pointer" }}
          />
        </div>
      </Row>

      <Graph />

      <Total />

      <div style={{ marginTop: "20px", display: "flex" }}>
        <div className={style.waper}>
          <span className={style.lable}>Tháng 4,2021</span>
          <img src={date} alt="" className={style.icon} />
        </div>
        <div>
          <DonutGraph />
        </div>
      </div>
      <CalendarCustom />
    </Row>
  );
}

export default Home;
