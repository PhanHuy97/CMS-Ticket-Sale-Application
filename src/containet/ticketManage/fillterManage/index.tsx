import { Row, Col, Radio, Space } from "antd";
import dateGrey from "../../../assets/svg/icon/dateGrey.svg";
import date from "../../../assets/svg/icon/date.svg";

import Fill from "../../../component/fill";
import style from "./fillterManage.module.scss";
import Button from "../../../component/Button";

function FillterManage() {
  return (
    <div className={style.wapper}>
      <span className={style.title}>Lọc vé</span>
      <Row>
        <Col flex="1">
          <span className={style.label}>Tình trạng đối soát</span>
        </Col>
        <Col flex="1">
          <Radio.Group size="large">
            <Space direction="vertical">
              <Radio value={1} className={style.radio}>
                Tất cả
              </Radio>
              <Radio
                value={2}
                className={style.radio}
                style={{ marginTop: "7px" }}
              >
                Đã đối soát
              </Radio>
              <Radio
                value={3}
                className={style.radio}
                style={{ marginTop: "7px" }}
              >
                Chưa đối soát
              </Radio>
            </Space>
          </Radio.Group>
        </Col>
      </Row>
      <Row style={{ marginTop: "26px" }}>
        <Col flex="1">
          <span className={style.label}>Loại vé</span>
        </Col>
        <Col flex="1">
          <span className={style.radio}>Vé cổng</span>
        </Col>
      </Row>
      <Row style={{ marginTop: "26px" }}>
        <Col flex="1">
          <span className={style.label}>Từ ngày</span>
        </Col>
        <Col flex="1">
          <Fill type="disable" icon={dateGrey} className={style.fill}>
            01/05/2021
          </Fill>
        </Col>
      </Row>
      <Row style={{ marginTop: "26px" }}>
        <Col flex="1">
          <span className={style.label}>Đến ngày</span>
        </Col>
        <Col flex="1">
          <Fill type="disable" icon={date} className={style.fillOn}>
            dd/mm/yy
          </Fill>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: "32px" }}>
        <Button type="outline" size="xl" className={style.button}>
          Lọc
        </Button>
      </Row>
    </div>
  );
}

export default FillterManage;
