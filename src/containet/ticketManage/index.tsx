import { Col, Row } from "antd";
import FillterManage from "./fillterManage";

import Manage from "./Manage";
import style from "./ticketManage.module.scss";

function TicketManager() {
  return (
    <Row gutter={[24, 24]} className={style.wapper}>
      <Col flex="7">
        <div className={style.column}>
          <Manage />
        </div>
      </Col>
      <Col flex="3">
        <div className={style.column}>
          <FillterManage />
        </div>
      </Col>
    </Row>
  );
}

export default TicketManager;
